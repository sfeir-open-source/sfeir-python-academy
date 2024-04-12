<!-- .slide: class="transition-bg-green-5 left" -->

# Dev Workstation Setup

##==##

## Install Python

### **Python 2 or Python 3** ?

All available versions of Python can be found on  [https://www.python.org](https://www.python.org/) 

❌ ☠️ **Python 2** has reached its **end-of-life**  and so, is **no longer maintained**, nor **updated**

✅ 🙂 **Python 3** is THE **recommended** version to install for new projects.

<br/>

**Python 3** provides a more **stable**, **secure**, and **feature-rich platform** for software development, ensuring compatibility with the latest tools and libraries in the Python ecosystem.

Notes:

- Python 2 is EOL since 01/01/2020

- Python 3 Improvements: Python 3 introduced numerous improvements, including enhanced syntax, better Unicode support, asyncio for asynchronous programming, type hints, and many performance optimizations. These improvements make Python 3 more robust, efficient, and feature-rich compared to Python 2.

- Compatibility with Libraries and Frameworks: Many third-party libraries and frameworks have dropped support for Python 2 and are now exclusively supporting Python 3. By using Python 3, you ensure compatibility with the latest versions of popular libraries and frameworks, as well as access to new features and enhancements.

- Community Support: The Python community has largely migrated to Python 3, and most new projects, tutorials, and resources are geared towards Python 3. By using Python 3, you benefit from a larger and more active community, with ample resources and support available for development.

- Future-Proofing: Choosing Python 3 ensures that your codebase remains relevant and maintainable in the long term. As the Python ecosystem continues to evolve, Python 3 will be the primary focus of development efforts, while Python 2 becomes increasingly outdated and incompatible with modern practices.

##--##

<!-- .slide: class="with-code consolas" -->

## Install Python 🐍

### Install On **Mac OS**

Python can easily be installed using the package manager [Homebrew](https://brew.sh/)

```
brew install python
```
<!-- .element: class="big-code" -->

<br/>

After installation, verify Python installation by running:

```
python --version
```
<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code consolas" -->

## Install Python 🐍

### Install On **Windows**

Python can easily be installed using the package manager [Scoop](https://scoop.sh/)

```
scoop install python
```
<!-- .element: class="big-code" -->

<br/>

After installation, verify Python installation by running:

```
python --version
```
<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code consolas" -->

## Install Python 🐍

### Install On **Linux**

For **Debian/Ubuntu-based** systems, you can install Python using `apt`:
```
sudo apt update
sudo apt install python
```
<!-- .element: class="big-code" -->

<br/>

For **Red Hat/CentOS-based** systems, you can install Python using `yum`:
```
sudo yum install python3
```
<!-- .element: class="big-code" -->

<br/>

After installation, verify Python installation by running:

```
python3 --version
```
<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code consolas" -->

## Install Python 🐍

### Install Using **Docker** and **DevContainers** (_recommended_)

If you use `VSCode`, `IntelliJ` or `Github Codespaces`,  you can leverage [Docker](https://docker.com) and [Dev Containers](https://containers.dev) to install Python in a more **portable** and **automated** manner.

<br/>

Instructions for **`VSCode`**-based editors:

* Install  the [Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

* Create a **`devcontainer.json`** file under a **`.devcontainer/`** folder at project root

```json
{
	"name": "SFEIR Python Academy DevContainer",
	"image": "mcr.microsoft.com/devcontainers/python:1-3.12-bullseye",
}

```
* Then do **<kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>** -> "Dev Containers : Open folder in Container..."

##--##

<!-- .slide: class="with-code consolas" -->

## Install Python 🐍

### Install Using **Docker** and **DevContainers** (_recommended_)

Sample of a more complete **`.devcontainer/devcontainer.json`** file

```json [4|6|9|18-26]
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/typescript-node
{
	"name": "SFEIR Python Academy DevContainer",
	// Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
	"image": "mcr.microsoft.com/devcontainers/python:1-3.12-bullseye",

	// Features to add to the dev container. More info: https://containers.dev/features.
	// "features": {},

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "pip3 install --user -r requirements.txt",

	// Configure tool-specific properties.
	"customizations": {
		"vscode": {
			"extensions": [
				"ms-python.python",
				"ms-python.debugpy",
				"ms-toolsai.jupyter"
			]
		}
	},

	// Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
	// "remoteUser": "root"
}

```

##==##

## Dev Workstation Setup 

### Create a **Python Virtual Environment** (venv)

Just like a **`Java`**, **`.NET`**, or **`Node.JS`** project, a **`Python`** project can have dependencies too.

Those depedencies can be installed with a tool named **`pip`** (**P**ackage **I**nstaller for **P**ython).

It comes installed with Python by default.

To avoid the dependencies of a project to **pollute global dependencies** of the system where Python is installed, it is recommended to create a **virtual environment**.

##==##

<!-- .slide: class="with-code consolas" -->

## Dev Workstation Setup 

### Create a **Python Virtual Environment** (venv)


* Use **virtual environments** to manage dependencies for different projects and to avoid conflicts between packages.

* Install the **`virtualenv`** package using **`pip`** (only required once):

```bash
pip install virtualenv
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas" -->

## Dev Workstation Setup 

### Create a **Python Virtual Environment** (venv)

* Navigate to your project directory and create a virtual environment:
```bash
cd your_project_directory
virtualenv venv
```
<!-- .element: class="big-code" -->

* Activate the virtual environment:
	* On Windows:
```bash
venv\Scripts\activate
```
<!-- .element: class="big-code" -->
	* On MacOS/Linux:
```bash
source venv/bin/activate
```
<!-- .element: class="big-code" -->
