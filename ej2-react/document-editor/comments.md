---
layout: post
title: Comments in React Document editor component | Syncfusion
description: Learn here all about Comments in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Comments 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Comments in React Document editor component

Document Editor allows you to add comments to documents. You can add, navigate and remove comments in code and from the UI.

To know more about the comments in DocumentEditor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=Q8BYxr6OYHo" %}

## Add a new comment

Comments can be inserted to the selected text.

```ts
documentEditor.editor.insertComment("Test comment");
```

## Comment navigation

Next and previous comments can be navigated using the below code snippet.

```ts
//Navigate to next comment
documentEditor.selection.navigateNextComment();

//Navigate to previous comment
documentEditor.selection.navigatePreviousComment();
```

## Delete comment

Current comment can be be deleted using the below code snippet.

```ts
documentEditor.editor.deleteComment();
```

## Delete all comment

All the comments in the document can be deleted using the below code snippet.

```ts
documentEditor.editor.deleteAllComments();
```

## Protect the document in comments only mode

Document Editor provides support for protecting the document with `CommentsOnly` protection. In this protection, user allowed to add or edit comments alone in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    EnforceProtection();
    StopProtection();
}, []);
function EnforceProtection(){
  //enforce protection
  container.documentEditor.editor.enforceProtection('123','CommentsOnly');
}
function StopProtection(){
  //stop the document protection
  container.documentEditor.editor.stopProtection('123');
}
    return (
      <div>
      <button onClick={EnforceProtection}>enforceProtection</button>
      <button onClick={StopProtection}>stopProtection</button>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
      />
      </div>

    );
  
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

```

Comment only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable comment only protection](images/commentsonly.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In stop protection method, parameter denotes the password.