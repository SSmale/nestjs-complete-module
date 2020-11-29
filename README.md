![nestjs-complete-module](https://socialify.git.ci/SSmale/nestjs-complete-module/image?description=1&language=1&owner=1&pattern=Signal&theme=Dark)

I could not find a schematic that created a CRUD module in NestJS. So I build this.

# Installation

`npm i -D @iamsimonsmale/nestjs-complete-module`

# File Structure

The file structure looks like :

```typescript
app/
├─ controller/
│  ├─ <name>.controller.spec.ts
│  ├─ <name>.controller.ts
├─ models/
│  ├─ <name>.entity.ts
│  ├─ <name>.model.ts
├─ service/
│  ├─ <name>.service.spec.ts
│  ├─ <name>.service.ts
├─ <name>.module.ts

```

# Schema

## Currently Implemented

```
{
  "$schema": "http://json-schema.org/schema",
  "id": "nestjs-complete-module",
  "title": "Generates NestJS Module",
  "description": "A schematic to generate a NestJS module with a service, controller, TypeORM model.",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the module.",
      "$default": {
        "$source": "argv",
        "index": 0
      },
      "x-prompt": "What is the name of the module?"
    },
    "project": {
      "type": "string",
      "description": "The name of the project.",
      "$default": {
        "$source": "projectName"
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```


## Aim

```
{
  "$schema": "http://json-schema.org/schema",
  "id": "nestjs-complete-module",
  "title": "Generates NestJS Module",
  "description": "A schematic to generate a NestJS module with a service, controller, TypeORM model.",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the module.",
      "$default": {
        "$source": "argv",
        "index": 0
      },
      "x-prompt": "What is the name of the module?"
    },
    "path": {
      "type": "string",
      "format": "path",
      "description": "The path to create the module.",
      "visible": false
    },
    "project": {
      "type": "string",
      "description": "The name of the project.",
      "$default": {
        "$source": "projectName"
      }
    },
    "module": {
      "type": "string",
      "description": "Allows specification of the declaring module.",
      "alias": "m"
    },
    "flat": {
      "type": "boolean",
      "default": false,
      "description": "Flag to indicate if a dir is created."
    },
    "spec": {
      "type": "boolean",
      "default": true,
      "description": "Specifies if a spec file is generated."
    },
    "lintFix": {
      "type": "boolean",
      "default": false,
      "description": "Specifies whether to apply lint fixes after generating the model."
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
