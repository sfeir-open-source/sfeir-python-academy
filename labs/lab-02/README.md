# Lab 02: Installing Packages

This lab will show how to install packages within a Python project.


## 0. Initial Setup

1. Open `mypyproj` from previous lab in VSCode, (or copy it from `sfeir-python-academy/labs/lab-01-solution/`) 
2. Open the integrated terminal (at the root of the folder)
3. Make sure that the **virtual environment** is currently activated in the terminal session
    * Astuce 💡: Run `source venv/bin/activate` to re-activate if not yet
![Alt text](./devcontainers-vscode-installation.png)

## 1. Using `pip freeze` and `pip install` commands

You can use the `pip freeze` to list of all packages currently installed in your virtual environment.

1. Run `pip freeze`
    * What is the output?
2. Install latest version of package `langchain-core`
3. Run `pip freeze` again
    * What version of `langchain` package was installed?
    * What additional packages were installed as peer dependencies?
4. Save all those packages into a `requirements.txt` file
    * 💡 You can use  `pip freeze > requirements.txt` to generate that file automatically, based on installed packages

## 2. Reproducible installations with `requirements.txt` file

1. Open `requirements.txt` and append a new line with `numpy==1.23.4` at the end of it
2. Run `pip freeze` command
    * Do you see `numpy` in the output?
3. Now run `pip install -r requirements.txt`
4. Run `pip freeze` again
    * Do you see `numpy` in the output?
