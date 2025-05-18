import os

# Define the path to the logos directory
logos_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'Logos')

# Output file path
output_file = os.path.join(os.path.dirname(__file__), 'logo_names.txt')

# Supported image extensions
image_extensions = {'.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'}

# Get all image file names
try:
    image_files = [
        f for f in os.listdir(logos_dir)
        if os.path.isfile(os.path.join(logos_dir, f)) and os.path.splitext(f)[1].lower() in image_extensions
    ]

    # Write to a file
    with open(output_file, 'w') as f:
        for name in image_files:
            f.write(name + '\n')

    print(f"✔ Found {len(image_files)} image(s). Names saved to {output_file}")

except Exception as e:
    print(f"❌ Error: {e}")
