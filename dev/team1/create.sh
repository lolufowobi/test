#!/usr/bin/env bash
set -Eeo pipefail

# Get the directory of the script
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

input_file="$script_dir/job.yaml"
output_file="$script_dir/app.yaml"

image_name=$(yq e '.spec.template.spec.containers[0].image' "$input_file")

file_sha256=$(sha256sum "$input_file" | awk '{ print $1 }')

cat <<EOF > "$output_file"
image: $image_name
sha256: $file_sha256
EOF
