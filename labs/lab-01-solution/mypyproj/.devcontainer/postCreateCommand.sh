#!/bin/bash

# Create the virtual environment (if missing)
if [ ! -f venv/bin/activate ]; then
    echo "Creating the virtual environment (venv)..."
    virtualenv venv
fi

#activate the virtual environment for this terminal session
echo "Activating the virtual environment (venv)..."
source venv/bin/activate
echo "Setup done ✅" 