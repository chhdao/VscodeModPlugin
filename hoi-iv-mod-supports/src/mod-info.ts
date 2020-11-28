/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 这个文件来自 GOSCPS(https://github.com/GOSCPS)
 * 使用 GOSCPS 许可证
 * File:    mod-info.ts
 * Content: mod info ts source file
 * Copyright (c) 2020 GOSCPS 保留所有权利.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import * as vscode from 'vscode';


vscode.languages.registerHoverProvider('hoi4mod', {
    provideHover(
      document//:vscode.TextDocument
      , position//:vscode.Position
      , token/*:vscode.CancellationToken*/) {

          const words = document.getText(document.getWordRangeAtPosition(position));

          switch(words){
            case '': return {
                contents: ['sad']
            };

          }



          return {
            contents: ['unknown']
          };
    }
  });