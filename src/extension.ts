import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument(() => {
      vscode.window.showInformationMessage('ヨシ！', { modal: true });
    }),
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
