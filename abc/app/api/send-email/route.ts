import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instantiate Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'sandsmthembu2@gmail.com'; 
const senderEmail = 'onboarding@resend.dev'; 

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set.');
    return NextResponse.json({ message: 'Server configuration error: Missing API key.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    console.log('Received form submission:', body);

    // Extract form data
    const { formType, ...formData } = body;
    const subject = `New Collaboration Form Submission: ${formType}`;

    // Construct HTML content for the email
    let htmlContent = `<h1>New ${formType} Submission</h1>`;
    htmlContent += '<ul>';
    for (const [key, value] of Object.entries(formData)) {
      htmlContent += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    htmlContent += '</ul>';

    // Send email using Resend
    const { data, error: sendError } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
    });

    // Handle Resend API response
    if (sendError) {
      console.error('Error sending email via Resend:', sendError);
      return NextResponse.json({ message: 'Error sending email', error: sendError.message }, { status: 500 });
    }
    console.log('Notification email sent successfully via Resend:', data);

    const submitterEmail = body.email; // Get submitter's email
    const submitterName = body.name; // Get submitter's name

    if (submitterEmail && typeof submitterEmail === 'string') {
      const ackSubject = "Submission Received - Africa's Blockchain Club"; // Professional subject
      // Add a professional greeting using the submitter's name if available
      const greeting = submitterName && typeof submitterName === 'string' ? `Dear ${submitterName},` : 'Greetings,';

      const ackHtmlContent = `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p>${greeting}</p>
          <p>Thank you for your submission regarding the <strong>${formType}</strong> opportunity; we confirm its receipt.</p>
          <p>Our team will review your information and contact you if necessary.</p>
          <br/>
          <p>Regards,</p>
          <p><strong>The Africa's Blockchain Club Team</strong></p>
        </div>
      `;

      try {
        const { data: ackData, error: ackSendError } = await resend.emails.send({
          from: senderEmail,
          to: submitterEmail,
          subject: ackSubject,
          html: ackHtmlContent,
        });

        if (ackSendError) {
          // Log error but don't necessarily fail the whole request if notification succeeded
          console.error('Error sending acknowledgment email via Resend:', ackSendError);
        } else {
          console.log('Acknowledgment email sent successfully via Resend:', ackData);
        }
      } catch (ackCatchError) {
         console.error('Caught error sending acknowledgment email:', ackCatchError);
      }
    } else {
      console.warn('Submitter email not found or invalid in form data. Cannot send acknowledgment.');
    }

    // Return success even if acknowledgment failed (notification succeeded)
    return NextResponse.json({ message: 'Submission processed successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    // Check if error is an instance of Error before accessing message
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    // Return an error response
    return NextResponse.json({ message: 'Error processing request', error: errorMessage }, { status: 500 });
  }
}
