const tipstext=`感谢使用UPLCC APIs，API均为免费调用和GET请求，返回格式为JSON。<br>Xiaomi MiMo-V2-Flash模型API Key需要自行前往<url>https://platform.xiaomimimo.com/</url>进行创建。`;
const apilist=[
{
name:"Xiaomi MiMo-V2-Flash",
alt:"小米MiMo大模型。",
url:"https://uplccapi.deno.dev/mimo",
eg:"https://uplccapi.deno.dev/mimo?key=${API_KEY}&msg=你好&maxtokens=8192",
res:[
"<res>key</res>必填，API密钥，可以自行前往<url>https://platform.xiaomimimo.com/</url>创建",
"<res>msg</res>必填，询问MiMo的内容",
"<res>maxtokens</res>选填，模型生成的最大token数，默认8192，范围1-131072"
],
ret:`{
  "code": 200,
  "from": "UPLCC API",
  "tokens": 268,
  "model": "mimo-v2-flash",
  "max_tokens": 8192,
  "message": "你好！我是MiMo，由小米大模型Core团队（Xiaomi LLM Core Team）开发的人工智能助手。我的目标是为用户提供有用、准确且安全的信息和帮助。无论你有什么问题或需要什么协助，我都会尽力为你提供支持。请随时告诉我你的需求！",
  "reason": "用户询问我的身份，这是一个关于我本质的直接问题。我需要以清晰、友好的方式介绍自己，同时保持专业和真诚的态度。\n\n我的核心定位是MiMo，由小米大模型Core团队开发的AI助手。这个身份定义了我的能力和责任范围。我应该强调我的核心价值——为用户提供有用、准确、安全的信息和帮助。\n\n在回应中，我需要主动询问用户的需求，这能体现我的服务导向性。同时要保持开放和包容的态度，让用户感到可以自由地向我提出任何问题。\n\n关于技术细节方面，我应该避免过度展开，但可以简要说明我是基于大语言模型技术，这样既保持了专业性又不会让用户感到困惑。最后用积极的语气结束，表达期待为用户服务的态度。"
}`
},
{
name:"安兔兔手机性能排行榜",
alt:"权威的手机测评软件的手机性能排行榜。",
url:"https://uplccapi.deno.dev/antutu",
eg:"https://uplccapi.deno.dev/antutu?type=1",
res:[
"<res>type</res>选填，默认值为1，1为安卓设备排行，2为苹果设备排行"
],
ret:`{
  "code": 200,
  "from": "UPLCC API",
  "choices": [
    {
      "top": 1,
      "phone": "红魔11 Pro+",
      "score": "4118828 分",
      "soc": "S-8 Elite Gen 5 24+1024"
    },
    {
      "top": 2,
      "phone": "iQOO 15",
      "score": "4078562 分",
      "soc": "S-8 Elite Gen 5 16+1024"
    },
    {
      "top": 3,
      "phone": "一加15",
      "score": "4073184 分",
      "soc": "S-8 Elite Gen 5 16+1024"
    },
    {
      "top": 4,
      "phone": "realme GT8 Pro",
      "score": "4066017 分",
      "soc": "S-8 Elite Gen 5 16+1024"
    },
    {
      "top": 5,
      "phone": "荣耀WIN",
      "score": "4054673 分",
      "soc": "S-8 Elite Gen 5 16+1024"
    }
  ]
}`
}
];
