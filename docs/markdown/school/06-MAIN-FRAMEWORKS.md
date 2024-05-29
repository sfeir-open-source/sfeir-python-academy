<!-- .slide: class="transition-bg-green-5 left" -->

# Main Frameworks

##==##

<!-- .slide: class="with-code consolas" -->

## Main Frameworks
### **Summary**

| **Feature**         | **Flask (Python)** | **FastAPI (Python)** | **Spring Boot (Java)** | **ASP.Net MVC (.NET)** | **Express.js (Node.js)** | **NestJS (Node.js)** |
|---------------------|---------------------|----------------------|------------------------|-------------------------|--------------------------|-----------------------|
| **Language**        | [Python](https://www.python.org/)              | [Python](https://www.python.org/)               | [Java](https://www.java.com/)                   | [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)                      | [JavaScript](https://www.javascript.com/)               | [TypeScript](https://www.typescriptlang.org/)/[JavaScript](https://www.javascript.com/) |
| **Framework Type**  | Backend             | Backend              | Full-stack             | Full-stack              | Backend                  | Full-stack            |
| **MVC Support**     | Yes                 | Yes                  | Yes                    | Yes                     | Yes                      | Yes                   |
| **ORM Support**     | Yes                 | Yes                  | Yes                    | Yes                     | Yes                      | Yes                   |
| **Template Engine** | [Jinja2](https://jinja.palletsprojects.com/)   | [Jinja2](https://jinja.palletsprojects.com/)    | [Thymeleaf](https://www.thymeleaf.org/),<br>[FreeMarker](https://freemarker.apache.org/), etc. | [Razor](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor)            | [EJS](https://ejs.co/),<br>[Pug](https://pugjs.org/),<br>[Handlebars](https://handlebarsjs.com/)     | [Handlebars](https://handlebarsjs.com/),<br>[Pug](https://pugjs.org/)       |

##--##

<!-- .slide: class="with-code consolas" -->

## Main Frameworks
### **Summary**


| **Feature**         | **Flask (Python)** | **FastAPI (Python)** | **Spring Boot (Java)** | **ASP.Net MVC (.NET)** | **Express.js (Node.js)** | **NestJS (Node.js)** |
|---------------------|---------------------|----------------------|------------------------|-------------------------|--------------------------|-----------------------|
| **Routing**         | Flask Routing       | [APIRouter](https://fastapi.tiangolo.com/tutorial/bigger-applications/#apirouter) | Annotated Controllers  | Attribute Routing       | [Express Routing](https://expressjs.com/en/guide/routing.html)          | Decorators,<br>Modules   |
| **Database Support**| [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/),<br>[SQLite](https://www.sqlite.org/),<br>[PostgreSQL](https://www.postgresql.org/),<br>[MySQL](https://www.mysql.com/), etc. | [SQLAlchemy](https://fastapi.tiangolo.com/tutorial/sql-databases/),<br>[Tortoise-ORM](https://tortoise-orm.readthedocs.io/en/latest/),<br>[SQLite](https://www.sqlite.org/),<br>[PostgreSQL](https://www.postgresql.org/),<br>[MySQL](https://www.mysql.com/) | [JDBC](https://docs.oracle.com/javase/tutorial/jdbc/overview/index.html),<br>[JPA](https://jakarta.ee/specifications/persistence/3.0/jakarta-persistence-spec-3.0.html),<br>[Hibernate](https://hibernate.org/) | [Entity Framework](https://learn.microsoft.com/en-us/ef/)  | [Mongoose](https://mongoosejs.com/),<br>[Sequelize](https://sequelize.org/)  | [TypeORM](https://typeorm.io/),<br>[Mongoose](https://mongoosejs.com/)     |
| **Learning Curve**  | Easy                | Easy                 | Moderate               | Moderate                | Moderate                 | Moderate              |
| **Scalability**     | Good                | Excellent            | Good                   | Good                    | Good                     | Excellent             |
| **Performance**     | Good                | Excellent            | Good                   | Good                    | Good                     | Good                  |


##==##

## Main Frameworks
### **Flask** : a **micro web framework** for Python

![center](assets/images/school/flask.png)

<br>

**`Flask`** is a **micro web framework** for building Web APIs, **RESTful** services and small web apps.


Here are some key points about **`Flask`**:

* **Simple** and **lightweight**
* **Flexible**
* **Polyvalent**


Notes:

* **Simple** and **lightweight**: Flask is known for its ease of use and speed of development. It's ideal for getting started with web development in Python or building smaller, focused applications.
* **Flexible**: Because it has a modular design, you can choose the libraries you need for your project. This allows for customization and avoids including unnecessary features.
* **Common uses**: Flask is a popular choice for building simple web APIs, RESTful services, and smaller web applications.

##==##

## Main Frameworks
### **SQLAlchemy** : an **SQL toolkit** and **ORM** library for Python

<br>

![center](assets/images/school/sqlachemy.png)

<br>

**`SQLAchemy`**  is a **SQL toolkit** and **Object-Relational Mapping** (ORM) library for Python.


Here are some key points about **`SQLAchemy`**:


* **ORM** (Object-Relational Mapper)
* Core (**SQL Expression Language**)
* **Schema** and **Types**
* **Database Connections** and **Transactions**
* **Extensibility**


Notes:

* ORM (Object-Relational Mapper):
    * Allows you to map Python classes to database tables.
    * Provides a high-level abstraction for database operations, allowing you to work with Python objects instead of writing raw SQL.

* Core (SQL Expression Language):
    * A powerful and flexible SQL toolkit that gives you complete control over the SQL generated by your applications.
    * Lets you construct SQL expressions in a more granular way, without the ORM abstraction.

* Schema and Types:
    * Provides tools for defining database schema, data types, and constraints.
    * Supports automatic schema generation and migrations.

* Database Connections and Transactions:
    * Manages database connections and transactions in a consistent and efficient manner.
    * Supports connection pooling and transaction management.

* Extensibility:
    * Highly extensible, allowing you to customize its behavior through plugins and custom extensions.
    * Supports integration with other libraries and frameworks.

