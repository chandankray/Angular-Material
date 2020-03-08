Install Angular Material
-----------------------------------------------------------------------------------------------
Use the Angular CLI's install schematic to set up your Angular Material project by running the following command:

ng add @angular/material

Add a new module for angular material and separate it from appModule
-----------------------------------------------------------------------------------------------
ng g m material

now add all the material components into material module and add material module into app module

Typography levels
-------------------------------------------------------------------------------------------------
<div class="mat-display-4"> This is display 4</div> 
<div class="mat-display-3"> This is display 3</div>
<div class="mat-display-2"> This is display 2</div>
<div class="mat-display-1"> This is display 1</div>

<div class="mat-headline"> This is headline h1</div>
<div class="mat-title"> This is title h2</div>
<div class="mat-subheading-2"> This is subheading 2 h3</div>
<div class="mat-subheading-1"> This is subheading 1 h4</div>

<div class="mat-body-1"> this is body text</div>
<div class="mat-body-2"> this is body text in bold</div>
<div class="mat-captions"> this is captions</div>

<div class="mat-typography">
<h1>This is a heading for h1</h1>
<h2>This is a heading for h2</h2>
<h3>This is a heading for h3</h3>
<h4>This is a heading for h4</h4>
</div>

Material buttons
-------------------------------------------------------------------------------------------------------
<button mat-button>Basic</button>
<button mat-raised-button>Basic raised</button>
<button mat-stroked-button>Basic stroked</button>
<button mat-flat-button>Basic flat</button>

Toggle buttons
-------------------------------------------------------------------------------------------------------
<mat-button-toggle #toggleButton disableRipple>Toggle button</mat-button-toggle>
{{toggleButton.checked}}

Multi-Cursor Editing
-------------------------------------------------------------------------------------------------------
To edit multiple instances of text within different sections of a document, you can use multi-cursor editing. This allows multiple cursors to be placed in different spots so text can be added, modified, or deleted.

To engage multi-cursor editing, press the Alt key (or Option key on a Mac) and use the mouse to place cursors throughout the document. Every click creates a cursor resulting in multiple cursors.

Adding Navbar
------------------------------------------------------------------------------------------------------
<mat-toolbar color="primary" class="navbar">
  <span>Material app</span>
  <div>
    <span>Home</span>
    <span>About</span>
    <span>Services</span>
  </div>
</mat-toolbar>

CSS
.navbar{
    justify-content: space-between;
}
span{
    padding-right: 1rem;
}
