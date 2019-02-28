// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "MotivateMate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.motivate', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		var motivateArray = [
			"You Can Do it!",
			"Don't Stop Now!",
			"That code right there is awesome.",
			"That thing you just did was epic.",
			"You can't see you right now but you are looking code cool.",
			"That line right there is tasty.",
			"You're here to kick code ass and chew gum. And you are all out of gum.",
			"Now to say that code block isn't good thats a crime."
		]
		var emojiArray = [
			"😎",
			"🧐",
			"👍",
			"😆",
			"😉",
			"😃",
			"😜"
		]

		var randomMotivate = motivateArray[Math.floor(Math.random()*motivateArray.length)];
		var randomEmoji = emojiArray[Math.floor(Math.random()*emojiArray.length)];
		vscode.window.showInformationMessage(randomMotivate+" "+randomEmoji);
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
