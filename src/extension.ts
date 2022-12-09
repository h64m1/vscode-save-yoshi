import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('vscodeSaveYoshi');
  const prefix = config.get('prefix');
  const suffix = config.get('suffix');

  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument(() => {
      vscode.window.showInformationMessage(`${prefix}ヨシ！${suffix}`);
    }),
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
