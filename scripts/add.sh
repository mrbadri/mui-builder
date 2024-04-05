#!/bin/bash

# Format all files
npx prettier --write .

# Stage the formatted files
git add .

# Optional: Provide a message to remind you to commit
echo "Files formatted and staged. Ready to commit!"
