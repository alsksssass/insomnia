

// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { ekdha } = require('./config.json');
///추가문
const tkrwpehla = "개 삭제됨"
let wjdekq = '010가나가나가나가나'
let tpttlrks = 0
let wjsghkrkqt = 0
///
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });


// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('준비됨');
});

client.on('interactionCreate', interaction => {
  // ...
});
////비밀번호
voxjs = '123654789'
vpdjvhs = 0
tlrp11 = 0

var calling = 0
var discalling = 0


/////

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === '개집벽') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/ZhPmtAD.jpg'] });
    message.react('❤️');
  } else if (commandName === '노란병') {
    await interaction.deferReply();
    await interaction.channel.send({ files: ["https://i.imgur.com/HWcMqGS.jpg"] });
    const message = await interaction.channel.send('```구일띠꺼라고 써진 노란색 병이있다.```');
    message.react('❤️');
  } else if (commandName === '황금열쇠') {
    await interaction.reply({ files: ["https://i.imgur.com/clooiJ4.png"] });
    const message = await interaction.channel.send('```뒤적뒤적, 황금색 작은 열쇠가 나왔다!```');
    message.react('❤️');
    await client.channels.cache.get('999886290008932433').send({ files: ['https://i.imgur.com/clooiJ4.png'] });
    const message1 = await client.channels.cache.get('999886290008932433').send('```황금열쇠\n어딘가에 쓸수있지 않을까?```');
    await message1.react('❤️');
  } else if (commandName === '구일띠일기') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/wJDaUPJ.png'] });
    message.react('❤️');
  } else if (commandName === '찢어진그림') {
    await interaction.reply({ files: ["https://i.imgur.com/wFH3GHB.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/vv540Jg.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/xq1O2wp.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/6DVBvq7.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/OKriH48.png"] });
    const message = await interaction.channel.send({ files: ["https://i.imgur.com/edRoMTZ.png"] });
    message.react('❤️');
  } else if (commandName === '작품판') {
    await interaction.reply({ files: ["https://i.imgur.com/i0J3URm.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/ctUMhtB.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/JvnpUCL.png"] });
    const message = await interaction.channel.send({ files: ["https://i.imgur.com/CfBZtTN.png"] });
    message.react('❤️');
  } else if (commandName === '쪽지') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/THRjag4.png'] });
    message.react('❤️');
  } else if (commandName === '수영일기') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/znbUwQX.png'] });
    message.react('❤️');
  } else if (commandName === '책') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/AiT9oUW.jpg'] });
    message.react('❤️');
  } else if (commandName === '페어일기') {
    await interaction.reply({ files: ["https://i.imgur.com/1Z9cAV6.png"] });
    const message = await interaction.channel.send({ files: ["https://i.imgur.com/9jAPBgz.png"] });
    message.react('❤️');
  } else if (commandName === '자물쇠') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/DMHtsiB.png'] });
    message.react('❤️');
  } else if (commandName === '편지') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/5PVcuJH.png'] });
    message.react('❤️');
  } else if (commandName === '편지2') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/Z2S8LoX.png'] });
    message.react('❤️');
  } else if (commandName === '수양록') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/AyE0lGQ.png'] });
    message.react('❤️');
  } else if (commandName === '수양록2') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/uXrhMQw.png'] });
    message.react('❤️');
  } else if (commandName === '연봉계약서') {
    await interaction.reply({ files: ["https://i.imgur.com/aB8eLCv.jpg"] });
    const message = await interaction.channel.send({ files: ["https://i.imgur.com/Avw4zqb.png"] });
    message.react('❤️');
  } else if (commandName === '포스터') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/QfyJFtx.png'] });
    message.react('❤️');
  } else if (commandName === '메일함') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/Thr8QvG.png'] });
    message.react('❤️');
  } else if (commandName === '합격') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/aBAMc11.png'] });
    message.react('❤️');
  } else if (commandName === '오일기') {
    await interaction.reply({ files: ["https://i.imgur.com/j3imE48.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/igLi2Cc.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/r98X4Nk.png"] });
    await interaction.channel.send({ files: ["https://i.imgur.com/1Ex264n.png"] });
    const message = await interaction.channel.send({ files: ["https://i.imgur.com/byJFEWF.png"] });
    message.react('❤️');
  } else if (commandName === '박사장') {
    await interaction.reply({ files: ["https://i.imgur.com/LrJWulu.jpg"] });
    const message = await interaction.channel.send('```사장님이 나를 쳐다본다.\n명패에 사장 박서함 이라고 쓰여있다.```');
    message.react('❤️');
  } else if (commandName === '영양제') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/7gvfEXd.png'] });
    message.react('❤️');
  } else if (commandName === '가나파이') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/APrRnmw.png'] });
    message.react('❤️');
    await client.channels.cache.get('999886290008932433').send({ files: ['https://i.imgur.com/APrRnmw.png'] });
    const message1 = await client.channels.cache.get('999886290008932433').send('```가나파이```');
    await message1.react('❤️');
  } else if (commandName === '휴대폰') {
    await interaction.deferReply();
    wjsghkrkqt *= 0
    wjsghkrkqt += 1
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/nQI3PI3.jpg'] });
    message.react('❤️');
    await client.channels.cache.get('999886290008932433').send({ files: ['https://i.imgur.com/nQI3PI3.jpg'] });
    const message1 = await client.channels.cache.get('999886290008932433').send('```휴대폰\n어딘가로 전화할 수 있지 않을까?```');
    await message1.react('❤️');
    const message2 =await client.channels.cache.get('991916794308743198').send('```/전화 ??????????? (-는 제외)명령어로 전화를 걸수 있다!!```');
    await message2.react('❤️');
  } else if (commandName === '시계발견') {
    tlrp11 *= 0
    tlrp11 += 1
    await interaction.reply('지금은 1시입니다. 시계도 못 보니?\n시계 뒷면을 볼 수 있을 것 같다.')
    const message = await interaction.channel.send('```입력에서 시간을 입력해 보자!!```');
    message.react('❤️');
    const message2 =await client.channels.cache.get('991916794308743198').send('```/시간 ???? (숫자만4자리) 명령어로 시간을 바꿀수 있다!!```');
    await message2.react('❤️');
  } else if (commandName === '의자') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/5BoeqCf.png'] });
    message.react('❤️');
    await client.channels.cache.get('999886290008932433').send({ files: ['https://i.imgur.com/5BoeqCf.png'] });
    const message1 = await client.channels.cache.get('999886290008932433').send('```의자\n어딘가에 사용할수 있지 않을까?```');
    await message1.react('❤️');
  } else if (commandName === '찢어진그림2') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/T9Ui5jg.png'] });
    message.react('❤️');
  } else if (commandName === '대걸레') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/gocujxj.jpg'] });
    message.react('❤️');
    await client.channels.cache.get('999886290008932433').send({ files: ['https://i.imgur.com/gocujxj.jpg'] });
    const message1 = await client.channels.cache.get('999886290008932433').send('```대걸레\n어딘가에 사용할수 있지 않을까?```');
    await message1.react('❤️');
  } else if (commandName === '결말1-1') {
    await interaction.deferReply();
    await interaction.channel.send('```나 때문에 죽은 줄 알았던 강아지 리먼이는 나 때문이 아니었다. 내가 리먼이에게 준 것은 강아지 영양제였다. 나는 추억memory을 얻었다. \n\n열여섯살의 나는 시기와 질투심에 쌓여 주변을 제대로 둘러보지 못 했지만 나도 누군가의 선망의 대상이었음을 알게 되었다. 나는 자존감ego을 얻었다.\n\n스무살, 나에게 심하게 집착하던 캐니가 두려워 나는 또 그러한 관계가 될까봐 누구도 만나지 못 하고 외출도 제대로 하지 못 했다. 하지만 나는 강력하게 대응했으며, 그녀가 그런 행동을 한 것은 내 탓이 아님을 깨달았다. 난 아무것도 잘못한게 없다. 난 돌파구break away를 찾았다.\n\n스물한 살, 나는 괴롭힘당하던 최후임을 모른 척 방관했지만, 진심어린 사과 후에 내가 남모르게 건넸던 작은 호의들이 후임이에게 의지가 되었다는 걸 알았다. 꼭 진실어린sincere 마음으로 제대로 사과해야지.\n\n스물여덟 살, 날 괴롭히고 억압한다고 생각했던 버니상사는 사실 날 위해 해주고 있는 일들도 많았다. 내가 극복overcome하고 용기를 내어 이야기하자 버니상사는 나의 이야기를 듣고 공감해주었다. 나는 이제 부당하게 당하는 일들에 대해 목소리 낼 수 있다.\n\n\n이제 내일이 오는 게 두렵지 않다.\n\n\n마음 속의 짐이 덜어지자 민성이는 편안하게 숙면에 빠져든다.\n\n\n민성아, 잘 자.``` \n ');
  } else if (commandName === '결말1-2') {
        await interaction.deferReply();
        const message = await interaction.channel.send({ files: ['https://imgur.com/CDt6oA6.gif'] });
        message.react('❤️');
  } else if (commandName === '결말2') {
    await interaction.deferReply();
    const message = await interaction.channel.send({
      content: '```민성이는 오늘도 잠을 이루지 못 한다. \n\n 9살 때 나 때문에 죽은 강아지, 16살에 내가 질투했던 민수, 20살 날 괴롭히던 스토커, 21살 괴롭힘 당하던 박후임을 외면했던 순간들. 그리고 지금 다니고 있는 직장에서 내일도 날 괴롭힐 버니상사... \n\n이 모든 것들이 오늘도 하나가 되어 민성이의 머릿속을 파고들고 또 파고든다. 언제쯤 나는 이 괴로운 기억들에서 벗어나서 편안한 잠을 이룰 수 있을까.\n\n\n이게 벌써 몇 일째지. 민성이는 처방받아온 수면제를 꺼낸다. 그리고는 차근차근 모아온 수면제를 한웅큼 쥔다. 그리고는 한 번에 꿀꺽 삼킨다.\n\n 이제는 좀 편해질 수 있겠지....\n\n\n민성은 그토록 원했던 편안한... 그리고 영원한 잠에 빠져든다.```', fetchReply: true
    });
    message.react('❤️');
  } else if (commandName === '결말3') {
    await interaction.deferReply();
    const message = await interaction.channel.send('```오은영 박사님과의 심리치료 프로그램이 끝이 났다. \n\n계속되는 불면증에 시달리다가 비싼 돈을 들여 예약했는데 프로그램은 끝까지 잘 참여했지만, 아직도 마음 속에 뭔가가 남아 있다. 그 전만큼 불면증이 심하진 않지만, 뭔가 찝찝하다.\n\n겨우 잠이 드나 싶은 날도 있긴 하지만, 어떤 날은 꿈에 최후임이 나타나서 놀라며 깬다. \n\n모르는 척 했지만, 사실 다 알고 있었어.  \n\n최후임이 박선임에게 괴롭힘 당하고 있는거. 프로그램 속에서는 최후임한테 사과를 했지만, 현실로 돌아와서는 굳이 다시 최후임에게 연락하진 않았다.\n\n 내가 꼭 그래야할까?내가 했던 행동들은 잘 한 걸까, 아직도 의문이 든다.\n\n 뭔가 다른 방법으로 해결할 수 있지 않았을까? 모르겠다. \n\n그냥 덮어버릴래. \n\n잊어버려야하는데 왜 자꾸 다시 꿈에 나오냐고!!!!!!!!!!!!!\n\n어디서부터 잘못된 걸까.\n\n오늘도 민성이는 밤 늦게까지 눈을 감고 잠을 청해본다. \n\n언젠가는 벗어날 수 있겠지.\n\n이 고통에서_```');
    message.react('❤️');
  } else if (commandName === '구일띠1') {
    await interaction.deferReply();
    await interaction.channel.send('```저는 아홉살, 구일띠입니다. \n\n제가 좋아하는 강아지 리먼이 있죠? \n\n리먼이 진짜 진짜 귀엽지 않나요?\n\n\n근데 여러분 그거 아셨어요? 강아지들의 시간은 인간들의 시간보다 더 빨리 흐른다는 거…\n\n저는 리먼이가 저랑 동갑 친구인줄 알았거든요?\n\n그런데 사람 나이로 아홉살이면 강아지 나이로는… 할아버지래요ㅠㅠ\n\n\n그것도 모르고 저는 제가 독약같은 걸 리먼이에게 줘서 리먼이가 죽은줄만 알았어요.\n하지만 알고보니 그건 그냥 강아지에게 좋은 영양제였어요.\n\n제가 리먼이를 죽인게 아니었어요!\n\n\n리먼이가 무지개다리를 건넌 건 너무너무 슬프지만, 그래도 어쩔 수 없는 거겠죠?\n\n이젠 리먼이와의 행복했던 시간만을 기억할래요!\n\n\n언젠간 다시 만날 그 날을 기다릴게, 리먼아 사랑해!```\n\n \n\n');
  } else if (commandName === '구일띠2') {
    await interaction.reply('\n\n```당신의 진짜 이름은 memory 입니다. \n\n guilty죄책감으로 얼룩진 과거를 바로잡고 리먼이와의 추억을 되찾으셨기 때문에 진짜 이름을 찾으셨습니다.``` \n\n')
    await interaction.channel.send({ files: ["https://i.imgur.com/hoXsMBF.gif"] });
  } else if (commandName === '구일띠3') {
    await interaction.reply('\n\n```당신은...``` \n')
    await interaction.channel.send('||증||')
    const message = await interaction.channel.send('```이라는 키워드를 얻으셨습니다.```')
    message.react('❤️');
  } else if (commandName === '인비1') {
    await interaction.deferReply();
    await interaction.channel.send('```저는 16살, 인비입니다. \n\n저는 제가 잘 하는 게 하나도 없다고 생각했어요.\n\n축구도 잘 하고 친구들한테 인기도 많은 민수가 늘 부러웠죠.\n아마 제가 처음 질투라는 감정을 느껴본 친구가 아니었나 싶어요.\n\n그런데 민수는 공부를 잘 하는 수영이를 부러워했고,\n\n그 수영이는 항상 행복하게 지내던 진후를 부러워했고,\n\n진후는 그림을 잘 그리는 저를 부러워했지 뭐에요?\n\n\n전 이제 알아요.\n\n사람들은 다 각자 잘 하는 게 다르고, 좋아하는 게 다르다는 거.\n\n그리고 나에게 없는 것을 부러워하기만 하기보다 내가 가진 장점을 소중히 여겨야한다는거.\n\n\n나는 이제 자존감을 얻었어요. 여러분들도 자신의 장점을 찾아보고 나를 소중히 여길 수 있게 되길 바라요.```\n\n');
  } else if (commandName === '인비2') {
    await interaction.reply('\n\n```\n\n당신의 진짜 이름은 ego입니다. 질투envy를 억누르고 ego 자존감을 얻으셨기 때문에 진짜 이름을 찾으셨습니다.``` \n\n')
   await interaction.channel.send({ files: ["https://i.imgur.com/3DuhauC.gif"] });
  } else if (commandName === '인비3') {
    await interaction.reply('\n\n```당신은...``` \n')
    await interaction.channel.send('||면||')
    const message = await interaction.channel.send('```이라는 키워드를 얻으셨습니다.```')
    message.react('❤️');
  } else if (commandName === '페어1') {
    await interaction.deferReply();
    await interaction.channel.send('```안녕하세요. 저는 스무살 페어입니다. \n\n제가 어떻게 이 상황에서 벗어 났냐고요? 달력을 보시면 아시겠지만 결국 7월 24일에 급하게 방을 빼고 다른 곳으로 이사를 할 수 밖에 없었답니다… 당연히 전화번호도 바꾸고, 메신저도 탈퇴했어요.\n\n제 애인, 아니, 전 애인은 전혀 말이 통하는 상대가 아니었어요. 아무리 그만하라고, 그냥 친구로 지내자고 해도 제 의견을 끝까지 전혀 존중하지 않았을 거예요…\n\n때로는… 그저 회피하고 도망가야할 때도 있는 것 같아요.\n\n제 자신한테 하고 싶은 말요?\n\n글쎄요.\n\n네 잘못이 아니다. 라고 해주고 싶어요. 이렇게 될 줄, 그런 사람인 줄 제가 어떻게 알 수 있었겠어요?\n\n너무 두려워서 다시는 아무도 만나고 싶지 않고, 다시는 누구도 믿을 수 없을 것 같지만…\n그래도 시간이 지나면… 저를 좋아하면서도 존중해주는 사람과 새로운 사랑을 시작할 수 있겠죠?```\n\n');
  }
    else if (commandName === '페어2') {
    await interaction.reply('\n\n```당신의 진짜 이름은 break away 입니다. fear두려움에서 잘 도망치셨기 때문에 진짜 이름을 찾으셨습니다.``` \n\n')
   await interaction.channel.send({ files: ["https://i.imgur.com/ukXkrfF.gif"] });
    }
    else if (commandName === '페어3') {
    await interaction.reply('\n\n```당신은...``` \n')
    await interaction.channel.send('||불||')
    const message = await interaction.channel.send('```이라는 키워드를 얻으셨습니다.```')
    message.react('❤️');
  } else if (commandName === '옹루케르1') {
    await interaction.deferReply();
   await interaction.channel.send('```저는 스물한살, 옹루케르입니다. \n\n사실 저는 박선임이 최후임을 괴롭히고 있다는 걸 알고 있었어요.\n\n하지만 괜히 아는 척 했다가 그 괴롭힘의 화살이 저에게로 향할까봐 방관했습니다.\n\n제가 할 수 있는 거라고는 그냥 제가 가지고 있던 가나파이 몇 개를 최후임 관물대에 몰래 넣어놓는 거 뿐이었죠.\n\n\n이제라도 저는 용기를 내어 최후임에게 사과하고 싶어요.\n\n앞으로는 불의를 보았을 때, 방관자가 되고 싶지 않네요.\n\n\n진심어린 사과를 한다면 최후임도 제 마음을 알아줄까요?```\n\n');
  } 
    else if (commandName === '옹루케르2') {
     await interaction.reply('\n\n```당신의 진짜 이름은 sincere 입니다. onlooker 방관자에서 벗어나셨기 때문에 진짜 이름을 찾으셨습니다.``` \n\n')
    await interaction.channel.send({ files: ["https://i.imgur.com/lAqxsGO.gif"] });
    }
     else if (commandName === '옹루케르3') {
    await interaction.reply('\n\n```당신은...``` \n')
    await interaction.channel.send('||녕||')
   const message = await interaction.channel.send('```이라는 키워드를 얻으셨습니다.```')
    message.react('❤️');
  } else if (commandName === '오프리숀1') {
    await interaction.deferReply();
  await interaction.channel.send('```저는 스물여덟살, 오프리숀입니다. \n\n전 제 직속상사 버니님이 저를 이유없이 싫어하고 미워하고 괴롭히고 있다고 생각했어요.\n\n하지만 제 연봉을 올려주려고 힘써준 게 버니님이었다는 걸 알았어요.\n\n\n지금도 버니님이 절 억압한 방식이 옳다고는 생각하지 않아요.\n\n하지만 저는 이제 마냥 피하기만 해서는 안 된다고 생각해요.\n\n직접 버니님께 이런 부분은 감사하지만 이런 부분은 속상하다고 이야기를 드려볼까해요.\n\n단 둘이 이야기할 용기가 나지 않으면 인사팀 허니님의 도움을 받아볼까도 싶어요.\n\n\n사람들은 누구나 살면서 여러가지 고난과 역경에 부딪히게 되잖아요.\n\n그 때 혼자 끙끙 앓을 것인가, 그냥 피해버릴 것인가.\n\n아니면 문제에 직면하고 부딪혀서 돌파구를 찾아낼 것인가.\n\n나의 선택에 따라 많은 것들이 바뀔 수 있다고 믿어요.\n\n\n여러분도 여러분의 역경을 극복할 수 있길 바랍니다.```\n\n');
  }   else if (commandName === '오프리숀2') {
   await interaction.reply('\n\n```당신의 진짜 이름은 overcome 입니다. oppression억압을 잘 극복하셨기 때문에 진짜 이름을 찾으셨습니다.``` \n\n')
    await interaction.channel.send({ files: ["https://i.imgur.com/wVWUCwO.gif"] });
  }else if (commandName === '오프리숀3') {
    await interaction.reply('\n\n```당신은...``` \n')
    await interaction.channel.send('||안||')
   const message = await interaction.channel.send('```이라는 키워드를 얻으셨습니다.```')
    message.react('❤️');
  } else if (commandName === '약한') {
    interaction.reply({ files: ["https://i.imgur.com/1Bt7xpH.png"] });
    const message = await interaction.channel.send('```문제집이 한 권 있다. 페이지가 접어져 있다. 표지 – YAKHAN 수학 1-1 (박쑥떡 꺼!!)```')
    await message.react('❤️');
  } else if (commandName === '쪽지오픈') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/lVtW2UT.png'] });
    await message.react('❤️');
  } else if (commandName === '캘린더') {
    await interaction.reply({ files: ["https://imgur.com/ixPGUMd.png"] });
    await interaction.channel.send({ files: ["https://imgur.com/LEeh9Sx.png"] });
    const message = await interaction.channel.send({ files: ["https://imgur.com/NM8aAqk.png"] });
    await message.react('❤️');
  } else if (commandName === '카톡') {
    await interaction.reply({ files: ["https://imgur.com/fRrKSsK.png"] });
    const message = await interaction.channel.send({ files: ["https://imgur.com/5v8s5S0.png"] });
    await message.react('❤️');
  } else if (commandName === '이력서') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://imgur.com/vckv6vH.png'] });
    await message.react('❤️');
  } else if (commandName === '셋팅') {
    await interaction.deferReply();
    wjsghkrkqt *= 0
    const message1 = await client.channels.cache.get('1001494798512947320').send({ files: ["https://imgur.com/rE7As8z.png"] });///1
    await message1.react('❤️');
    const message2 = await client.channels.cache.get('1001494976041058375').send({ files: ["https://imgur.com/cgncqeW.png"] });////2
    await message2.react('❤️');
    const message3 = await client.channels.cache.get('1001495326068314152').send({ files: ["https://imgur.com/HArmw9D.png"] });////3
    await message3.react('❤️');
    const message4 = await client.channels.cache.get('1001495384092332162').send({ files: ["https://imgur.com/okSK7QF.png"] });////4
    await message4.react('❤️');
    await client.channels.cache.get('1001495463792492635').send({ files: ["https://imgur.com/M2hFlPV.png"] });////5
    const message5 = await client.channels.cache.get('1001495463792492635').send('```작은 사무실 구석에 사장실이 보인다.```')
    await message5.react('❤️');
    const message6 = await client.channels.cache.get('999907699070353469').send('```구일띠야, 네가 정말 리먼이를 죽인 게 맞는 거니?\n\n만약 아니라면, 리먼이는 대체 왜 죽은 거야?```');////6
    await message6.react('❤️');
    const message7 = await client.channels.cache.get('999907832734437439').send('```인비야, 너와 민수와 수영이와 진후는 서로 어떤 관계였다고 생각해?\n\n인섬니아에 와서 인비 너에 대한 생각이 바뀌었니? \n\n아직도 너는 아무 것도 못 하는 아이니?```');////7
    await message7.react('❤️');
    const message8 = await client.channels.cache.get('999907932697276456').send('```페어야, 너는 그래서 어떻게 이 상황에서 벗어 났어?\n\n그 방법이 옳았다고 생각해? 후회된 적은 없어?```');////8
    await message8.react('❤️');
    const message9 = await client.channels.cache.get('999908039874326578').send('```옹루케르야, 너는 그 때 무슨 일이 있었다고 생각해?\n\n그리고 너는 지금 무엇을 해야한다고 생각해?\n\n과거를 바꿀 수는 없어. 지금의 너는 무엇을 할 수 있을까?```');////9
    await message9.react('❤️');
    const message10 = await client.channels.cache.get('999908072879292477').send('```오프리숀, 회사에서 널 힘들 게 하는 게 뭐야?\n\n지금 그 상황을 어떻게 해결하고 싶어? ```');////10
    await message10.react('❤️');
    const message11 = await client.channels.cache.get('991916794308743198').send('```/비번 ????  (숫자)입력\n 잘모르겠다면 /비번 비번:9999 를 그대로 복사해서 숫자만 바꾸고 엔터```');
  } else if (interaction.commandName === '올청소') {
    await interaction.reply('삭제(Max500)');
    const tkrwp = await client.channels.cache.get('1003991219275321364')
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    /////수다
    const tkrwp1 = await client.channels.cache.get('1001494798512947320')
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp1.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    //////1번방
    const tkrwp2 = await client.channels.cache.get('1001494976041058375')
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp2.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    /////2번방
    const tkrwp3 = await client.channels.cache.get('1001495326068314152')
    await tkrwp3.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp3.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp3.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp3.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp3.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    /////3번방
    const tkrwp4 = await client.channels.cache.get('1001495384092332162')
    await tkrwp4.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp4.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp4.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp4.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp4.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ////4번방
    const tkrwp5 = await client.channels.cache.get('1001495463792492635')
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp5.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    /////5번방
    const tkrwp6 = await client.channels.cache.get('995381231116111892')
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    await tkrwp6.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ////버니님
    const tkrwp7 = await client.channels.cache.get('995381463811887185')
    await tkrwp7.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ////인사팀
    const tkrwp8 = await client.channels.cache.get('999886290008932433')
    await tkrwp8.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///습득품
    const tkrwp9 = await client.channels.cache.get('999908039874326578')
    await tkrwp9.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///옹루케르
    const tkrwp00 = await client.channels.cache.get('991916794308743198')
    await tkrwp00.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///입력
    const tkrwp11 = await client.channels.cache.get('992324945277374484')
    await tkrwp11.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///사건의 전말
    const tkrwp12 = await client.channels.cache.get('999907699070353469')
    await tkrwp12.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///구일띠
    const tkrwp13 = await client.channels.cache.get('999907832734437439')
    await tkrwp13.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///인비
    const tkrwp14 = await client.channels.cache.get('999907932697276456')
    await tkrwp14.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///페어
    const tkrwp15 = await client.channels.cache.get('999908072879292477')
    await tkrwp15.bulkDelete(99)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
    ///오프리숀
    wjsghkrkqt *= 0
    vpdjvhs *= 0
    tlrp11 *= 0
    tpttlrks *=0
  } else if (commandName === '청소') {
    const number = interaction.options.getNumber('숫자');
    await interaction.reply(number + tkrwpehla);
    await interaction.channel.bulkDelete(number)
      .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
      .catch(console.error);
  } else if (commandName === '진엔딩') {
    await interaction.reply('https://imgur.com/gjuO5nV.png');
    await interaction.channel.send('```Thanks to 정다올```')
    const message = await interaction.channel.send('```인섬니아의 모든 수익금은 기부됩니다. 감사합니다```')
    message.react('❤️');
  } else if (commandName === '노멀엔딩') {
    await interaction.reply({ files: ["https://imgur.com/DHMV63L.png"] })
    await interaction.channel.send('```Thanks to 정다올```')
    const message = await interaction.channel.send('```인섬니아의 모든 수익금은 기부됩니다. 감사합니다```')
    message.react('❤️');
  } else if (commandName === '허사장') {
    await interaction.reply({ files: ["https://i.imgur.com/LrTtNF1.jpg"] });
    const message = await interaction.channel.send('```사장님이 나를 쳐다본다.\n명패에 사장 허경영 이라고 쓰여있다.```');
    message.react('❤️');
  } else if (commandName === '평가표') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/N6Atf8d.png'] });
    message.react('❤️');
  } else if (commandName === '발달표') {
    await interaction.deferReply();
    const message = await interaction.channel.send({ files: ['https://i.imgur.com/N6Atf8d.png'] });
    message.react('❤️');
  } if (commandName === '오박사') {
    const string = interaction.options.getString('진행말');
    const message = await interaction.reply({ content: ekdha+string+ekdha, fetchReply: true })
    message.react('❤️');
   }   else if (commandName === '전화') {
    const string = interaction.options.getString('다이얼');
    if (string == wjdekq && wjsghkrkqt == 1) {
      await interaction.deferReply();
      discalling += 1
      const message = await interaction.channel.send(' ```전화가 걸렸다 !! 뚜르르르르 뚜르르르르```');
      message.react('📲');
    }
    if(wjsghkrkqt != 1) {
          await interaction.deferReply();
      const message1 = await interaction.channel.send('```폰도 없이 어떻게 전화를 걸지??```');
      message1.react('📵');
    }
    if(wjsghkrkqt == 1 && string != wjdekq) {
          await interaction.deferReply();
          discalling += 1
      const message1 = await interaction.channel.send('```없는 번호입니다. 다시 확인하시고 걸어주시기 바랍니다```');
      message1.react('📵');
    }
    }
        else if (commandName === '패턴') {
    const string = interaction.options.getString('패턴');
    if (string == 123654789 && vpdjvhs == 1) {
      await interaction.deferReply();
      const message = await interaction.channel.send('```잠금이 해제되었다!```');
      message.react('🔓');
      const message4 = await client.channels.cache.get('1001495326068314152').send('```패턴이 풀렸다!!!```');
      message4.react('🔓');
    }
    else if(vpdjvhs != 1) {
          await interaction.deferReply();
      const message1 = await interaction.channel.send('```폰도 없이 어떻게 패턴을 푸나?```');
      message1.react('🔒');
    }
    else if(vpdjvhs == 1 && string != 123654789) {
          await interaction.deferReply();
      const message1 = await interaction.channel.send('```패턴 오류!```');
      message1.react('🔒');

    }
}

else if (commandName === '페어폰'){
vpdjvhs *= 0    
vpdjvhs += 1
    await interaction.reply('```두둥!!```')
    await client.channels.cache.get('991916794308743198').send({ files: ['https://i.imgur.com/T93cWmJ.png'] });
    const message2 = await client.channels.cache.get('991916794308743198').send('```/패턴 ????????? 로풀수있다. 숫자이며 위의 사진참고!```');
      message2.react('📱');
    const message1 = await interaction.channel.send('```페어의 폰을 찾았다!```');
      message1.react('📱');

  }   else if (commandName === '비번') {
    const number11 = interaction.options.getNumber('비번');
    111//수영
    486///노트북
    9321//개집
    0624///상자

    if (number11 === 111) {
          await interaction.deferReply();
      const message1 = await interaction.channel.send('```수영이 비밀번호가 풀렸다!```');
      message1.react('🔓');
      const message2 = await client.channels.cache.get('1001494976041058375').send('```수영이 자물쇠 비밀번호가 풀렸다```');
      message2.react('🔓');
    }
    else if (number11 === 9321) {
          await interaction.deferReply();
      const message3 = await interaction.channel.send('```멍뭉이집 비밀번호가 풀렸다!```');
      message3.react('🔓');
      const message4 = await client.channels.cache.get('1001494798512947320').send('```멍뭉이집 자물쇠 비밀번호가 풀렸다```');
      message4.react('🔓');
    }
    else if (number11 === 624) {
        await interaction.deferReply();
    const message3 = await interaction.channel.send('```큰상자가 열렸다!```');
    message3.react('🔓');
    const message4 = await client.channels.cache.get('1001495463792492635').send('```큰상자가 열렸다!!```');
    message4.react('🔓');
  }
    else if (number11 === 486) {
          await interaction.deferReply();
      const message5 = await interaction.channel.send('```노트북 비밀번호가 풀렸다!```');
      message5.react('🔓');
      const message6 = await client.channels.cache.get('1001495326068314152').send('```페어 노트북 비밀번호가 풀렸다```');
      message6.react('🔓');
    }
    else {
          await interaction.deferReply();
      const message7 = await interaction.channel.send('```잘못된 비밀번호다 ㅠㅠ```');
      message7.react('🔒');
    
  }
 } if (commandName === '시간') {
    const number121 = interaction.options.getNumber('시간');
    let dhdfn = 116
    let dhvmfl = 209
    if (number121 == dhdfn && tpttlrks <= 0 && tlrp11 == 1) {

      const message1 = await interaction.reply({ content: '```생활관 시계를 제대로 맞췄다!```', fetchReply: true })
      message1.react('🔓');
      const message2 = await client.channels.cache.get('1001495384092332162').send('```시간을 제대로 맞추었다!!```');
      message2.react('🔓');
    }
   else if (number121 == dhvmfl && tpttlrks <= 0 && tlrp11 == 1) {

      const message3 = await interaction.reply({ content: '```사무실 시계를 제대로 맞췄다!```', fetchReply: true })
      message3.react('🔓');
      const message4 = await client.channels.cache.get('1001495463792492635').send('```시간을 제대로 맞추었다!!```');
      message4.react('🔓');
    }
    else if (tpttlrks >= 1) {
      const message7 = await interaction.reply({ content: '```노래를 부르지 않으면 시간을 다시 맞출 수 없다!```', fetchReply: true })
      message7.react('🔒');
    }
    else if (tlrp11 == 0){
        interaction.reply('시계가 어디있지?')
    }
    else {
      tpttlrks += 1
      const message7 = await interaction.reply({ content: '```잘못된 시간이다 ㅠㅠ 얼른 노래를 불러야 시간을 다시 맞출 수 있다.\n\n노래를 불렀다면 계속 시도가 가능하다!```', fetchReply: true });
      message7.react('🔒');
    }
} else if (commandName === '시계리셋') {
      await interaction.reply({ content: '```시계를 다시 돌릴수 있게 되었다.```', fetchReply: true });
    tpttlrks -= 99
    console.log(tpttlrks)
  const message4 = await client.channels.cache.get('991916794308743198').send('```시계를 다시 돌릴수 있을것 같다!!```');
  message4.react('❤️');
  } else if (commandName === '전화기초기화') {
    wjsghkrkqt *= 0
vpdjvhs *= 0
tlrp11 *= 0
tpttlrks *=0
    await interaction.reply('초기화됨')
  } else if (commandName === '타이머') {
    const number = interaction.options.getNumber('num');
    let timecc = number*60
    await interaction.reply("⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초 타이머 시작")
    var timer = setInterval(() => {
        timecc --
        interaction.editReply({ content: "⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초남음" })
      .catch(console.warn = () => {});
        if (timecc === 0) {
            clearInterval(timer);
            interaction.editReply({ content: "⌛"+"시간종료!" })
          .catch(console.warn = () => {});
          }	
}, 1000
)
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  } else if (commandName === '야') {
    const message = await interaction.channel.send('You can react with custom emojis!');
    message.react('👍');
  }

});


////////////////////////////
/////////////////////////////
client.on('messageCreate', async (message) => { // When a message is created
    if (message.author.bot) return;
    const prefix ="!"
    const args = message.content.split(" ");
if(message.content.startsWith(`!타이머`)) { // If the message content is "!ping"
    
    
    let timecc = args[1]*60
  const tic = await message.reply("⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초 타이머 시작")
  var timer = setInterval(() => {
      timecc --
      tic.edit({ content: "⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초남음" })
      .catch(console.warn = () => {});
      
      if (timecc === 0) {
          clearInterval(timer);
          tic.edit({ content: "⌛"+"@everyone 시간종료!" })
          .catch(console.warn = () => {});
          }	
}, 1000)
}

if(calling == 1) {
  const connection = joinVoiceChannel({
    channelId: '981144982201171992',
    guildId: '981144982201171988',
    adapterCreator: message.guild.voiceAdapterCreator
    
})


const player = createAudioPlayer()
const resource = createAudioResource('./music/1234.mp3')


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
  connection.destroy();
});

calling --

    
  
}
if(discalling == 1) {
  const connection = joinVoiceChannel({
    channelId: '981144982201171992',
    guildId: '981144982201171988',
    adapterCreator: message.guild.voiceAdapterCreator
    
})


const player = createAudioPlayer()
const resource = createAudioResource('./music/123.mp3')


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
  connection.destroy();
});

discalling --

    
  
}
});

///////////////////////////////////////

// Login to Discord with your client's token
client.login(process.env.TOKEN);
