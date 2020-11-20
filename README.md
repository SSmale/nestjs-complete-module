# NestJS Complete Module Schematic

I could not find a schematic that created a CRUD module in NestJS. So I build this.

The file structure looks like :

```typescript
app/
├─ controller/
│  ├─ <g>.controller.spec.ts
│  ├─ <g>.controller.ts
├─ models/
│  ├─ <g>.entity.ts
│  ├─ <g>.model.ts
├─ service/
│  ├─ <g>.service.spec.ts
│  ├─ <g>.service.ts
├─ <g>.module.ts

```

# Schema Aims

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
