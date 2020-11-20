import { strings } from '@angular-devkit/core';
import { apply, Rule, SchematicContext, Tree, url, template, mergeWith, move } from '@angular-devkit/schematics';

import { parseName } from '@schematics/angular/utility/parse-name';
import { buildDefaultPath, getWorkspace } from '@schematics/angular/utility/workspace';

import { Schema } from './schema';

export function nestjsCompleteModule(_options: Schema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const workspace = await getWorkspace(tree);
    const projectName = _options.project || workspace.projects.keys().next().value;
    const project = workspace.projects.get(projectName);

    if (_options.path === undefined && project) {
      _options.path = buildDefaultPath(project);
    }

    const parsedPath = parseName(_options.path as string, _options.name);
    _options.name = parsedPath.name;
    _options.path = parsedPath.path;

    const sourceTemplates = url('./templates');

    const sourceParamTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
      }),
      move(_options.path),
    ]);
    return mergeWith(sourceParamTemplates);
  };
}
