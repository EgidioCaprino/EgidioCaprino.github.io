---
layout: post
title:  "Put your database under version control"
---
Liquibase is a very interesting tool used to put your database under version control. It uses a file which contains a
list of change sets. Each change set contains the instructions for updating the database, for example
_create this table_ or _delete this column_ instructions.

```xml
<changeSet id="1" author="Egidio Caprino">
  <createTable tableName="person">
    <column name="id" type="int" autoIncrement="true">
      <constraints primaryKey="true" nullable="false"/>
    </column>
    <column name="firstname" type="varchar(50)"/>
    <column name="lastname" type="varchar(50)">
      <constraints nullable="false"/>
    </column>
  </createTable>
</changeSet>
```

When you start a new project, the Liquibase file would be empty and it will grow as you work on the project.

If you are working on an existing project, you can create a change set from the current status of the database.
This would be your starting point.

We use it to keep track of how we change the database structure but also for deploying database changes between
different environment. It is integrated in our build pipeline which also validates the changes against a partial-clone
of the production database.

The coolest part is that it is vendor agnostic which makes moving to a different database provider easier, unless you
use custom SQL commands (yes, it can do that too).
