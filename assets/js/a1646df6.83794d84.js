"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9207],{2706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var s=n(7462),o=(n(7294),n(3905)),a=n(214);const r={title:"SegmentedButtons"},c=void 0,l={unversionedId:"components/SegmentedButtons/SegmentedButtons",id:"components/SegmentedButtons/SegmentedButtons",title:"SegmentedButtons",description:"Segmented buttons can be used to select options, switch views or sort elements.",source:"@site/docs/components/SegmentedButtons/SegmentedButtons.mdx",sourceDirName:"components/SegmentedButtons",slug:"/components/SegmentedButtons/",permalink:"/react-native-paper/docs/components/SegmentedButtons/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/SegmentedButtons/SegmentedButtons.tsx",tags:[],version:"current",frontMatter:{title:"SegmentedButtons"},sidebar:"components",previous:{title:"Searchbar",permalink:"/react-native-paper/docs/components/Searchbar"},next:{title:"Snackbar",permalink:"/react-native-paper/docs/components/Snackbar"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Segmented buttons can be used to select options, switch views or sort elements."),(0,o.kt)("div",{class:"screenshots"},(0,o.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/segmented-button.png"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { SafeAreaView, StyleSheet } from 'react-native';\nimport { SegmentedButtons } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [value, setValue] = React.useState('');\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <SegmentedButtons\n        value={value}\n        onValueChange={setValue}\n        buttons={[\n          {\n            value: 'walk',\n            label: 'Walking',\n          },\n          {\n            value: 'train',\n            label: 'Transit',\n          },\n          { value: 'drive', label: 'Driving' },\n        ]}\n      />\n    </SafeAreaView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default MyComponent;\n")),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(a.Z,{link:"SegmentedButtons/SegmentedButtons",mdxType:"PropTable"}))}p.isMDXComponent=!0}}]);