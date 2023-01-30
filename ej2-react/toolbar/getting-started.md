---
layout: post
title: Getting started with React Toolbar component | Syncfusion
description:  Checkout and learn about Getting started with React Toolbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple Toolbar and demonstrate the basic usage of the Toolbar control.

## Dependencies

Below is the list of minimum dependencies required to use the Toolbar component.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-popups
```

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

<div class='tsx'>

```

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

</div>

<div class='jsx'>

```

create-react-app quickstart

cd quickstart

```

</div>

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Accordion component, use the following command

```
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-navigations/styles/material.css';

```

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Initialize the Toolbar with commands

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/react/documentation/api/toolbar#items). An item is rendered with text by defining the default item type as a `Button`. For more information about item configuration, refer the [Item Configuration](./item-configuration/) section.

* Import the Toolbar component to your `src/App.tsx` file using following code.



```ts
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
    <ToolbarComponent id='toolbar'>
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective text="Paste" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" />
        <ItemDirective text="Italic" />
        <ItemDirective text="Underline" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);

```



* Now, run the application in the browser using the following command.

```bash
npm start
```

The output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs2" %}

## Initialize the Toolbar using HTML elements

The Toolbar component can be rendered based on the given HTML element using `<ToolbarComponent>`. You need to follow the below structure of HTML elements to render the Toolbar inside the `<ToolbarComponent>` tag.

```
   <ToolbarComponent>   --> Root Toolbar Element
    <div>      --> Toolbar Items Container
       <div>   --> Toolbar Item Element
       </div>
    </div>
  </ToolbarComponent>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-container-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-container-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-container-cs1" %}

## See Also

* [How to add Toggle Button](./how-to/add-toggle-button/)

N> You can refer to our [React Toolbar](https://www.syncfusion.com/react-ui-components/react-toolbar) feature tour page for its groundbreaking feature representations. You can also explore our [React Toolbar Example](https://ej2.syncfusion.com/react/demos/#/fabric/toolbar/default) that shows you how to render the Toolbar in React.