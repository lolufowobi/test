#!/usr/bin/env bash
set -Eeo pipefail

input_file="job.yaml"
output_file="app.yaml"

image_name=$(yq e '.spec.template.spec.containers[0].image' "$input_file")

file_sha256=$(sha256sum "$input_file" | awk '{ print $1 }')

cat <<EOF > "$output_file"
image: $image_name
sha256: $file_sha256
EOF
