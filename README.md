# AnimatedCircle and AnimatedNumber


<br>

## About: ##
A React Native Project to create and use an Animated Circle and an Animated Number using only [react-native-svg](https://github.com/react-native-svg/react-native-svg), [styled-components](https://styled-components.com/) and vanilla React Native libraries like [Animated](https://reactnative.dev/docs/animated) and [TextInput](https://reactnative.dev/docs/textinput).


<br>

---
---

<br>

## Preview: ##

<br>

<p align="center">
  <img width="264" height="568" alt="Animated Circle and Animated Number Preview" src="preview.gif">
</p>
<br>

---
<br>

## How to run the project: ##
PS: To execute this application you must configure [React Native](https://reactnative.dev/docs/environment-setup):
 * Use `React Native CLI Quickstart` option to configure Vanilla React Native.

<br>

### Step 1: Clone repository: ###

```
$ https://github.com/joorgeroberto/AnimatedCircle.git

$ cd AnimatedCircle
```

### Step 2: Install dependencies: ###

```
$ yarn
```

_or_

```
$ npm install
```
### Step 3: Execute project ###
```
$ react-native run-ios
```
_or_

```
$ react-native run-android
```

<br>

---

<br>

## Animated Circle Props: ##

<br>

<div align="center">

`Name` | `Type` | `Default Value`
---|---|---
percentage | number | 65 
radious | number | 40
strokeWidth | number | 0
duration | number | 500
color | string | #13547a
beginGradientColor | string | ''
endGradientColor | string | ''
delay | number | 0
numberColor | string | #13547a
max | number | 100
showNumber | bool | false

</div>

<br>

Relevant Informations:
* Use `radious` to change the circle size.
* Use `showNumber` prop to use and show `AnimatedNumber` in `AnimatedCircle`.

* Use `beginGradientColor` and `beginGradientColor` props to use and show  `AnimatedCircle` with gradient colors.
* You also can put any custom component in `AnimatedCircle` like code below:

<br>

<div align="center">
<div style='width: 300px;'>

```
<AnimatedCircle>
  <Component />
</AnimatedCircle>
```

</div>
</div>

<br>

---

<br>

## Animated Number Props: ##

<br>

<div align="center">

`Name` | `Type` | `Default Value`
---|---|---
number | number | 65 
fontSize | number | 40
duration | number | 500
delay | number | 40
numberColor | string | '#13547a'

</div>


<br><br><br><br><br><br>

---

<br><br><br><br><br><br>


<div style="display: flex;flex-direction: column;">
  <div style="align-self: center;display: flex;flex-direction: row; justify-content: space-around; align-items: center; width: 300px;">

  <div align="center">
  <a href="https://github.com/joorgeroberto">
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/5282212?s=460&u=53cc5df290ab3e86d8e73fb38483eb0dca55186a&v=4" width="100px;" alt="Foto de Jorge"/>
  <br />
    <p>
  <sub><b>Jorge de Carvalho</b></sub></a>
  <p>
  </div>
  </div>

<br>

<div align="center">

  [![Linkedin Badge](https://img.shields.io/badge/-Jorge_de_Carvalho-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/jorge-de-carvalho-aa21b2186/)
  [![Github Badge](https://img.shields.io/badge/-Jorge_de_Carvalho-000?style=flat-square&logo=Github&logoColor=white)](https://github.com/joorgeroberto)
  [![Gmail Badge](https://img.shields.io/badge/-jorgercjo@dcomp.ufs.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jorgercj@dcomp.ufs.br)](mailto:jorgercj@dcomp.ufs.br)
  </div>
</div>
