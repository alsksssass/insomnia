const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId } = require('./config.json');

const commands = [
  new SlashCommandBuilder().setName('개집벽').setDescription('구일띠 방의 개집벽 그림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('노란병').setDescription('구일띠 방의 개집안 밥그릇 확인시').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('황금열쇠').setDescription('황금열쇠').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('구일띠일기').setDescription('구일띠 방에서 발견되는 페어 일기').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('찢어진그림').setDescription('인비방에서 발견되는 찢어진 그림 6장').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('작품판').setDescription('교실뒤 작품판확인시 나오는 그림4개').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('쪽지').setDescription('인비방 쪽지(열리지않음)').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('수영일기').setDescription('수영이 일기(나무아래)').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('책').setDescription('페어 자기애성 인격장애 책').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('페어일기').setDescription('페어방에서 발견되는 일기').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('자물쇠').setDescription('자물쇠그림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('편지').setDescription('옹루케르방 최후임편지 연필x').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('편지2').setDescription('옹루케르방 최후임편지 연필o').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('수양록').setDescription('수양록 커버').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('수양록2').setDescription('옹루케루의 수양록').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('연봉계약서').setDescription('오프리숀 연봉계약서 2장').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('포스터').setDescription('강아지 수명 포스터').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('메일함').setDescription('오프리숀 받은 메임함').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('합격').setDescription('오프리숀 합격메일').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('오일기').setDescription('오프리숀 일기 5장').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('박사장').setDescription('박사장 사진').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('영양제').setDescription('오프리숀 방 강아지 영양제').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('가나파이').setDescription('번호적힌 가나파이 봉지').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('휴대폰').setDescription('휴대폰 그림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('의자').setDescription('의자 그림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('찢어진그림2').setDescription('찢어진 그림 합체판').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('대걸레').setDescription('대걸레 그림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('발달표').setDescription('인비방 선생님투척').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('결말').setDescription('진엔딩').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('결말2').setDescription('진실패엔딩').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('결말3').setDescription('어중간 성공').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('구일띠1').setDescription('구일띠 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('구일띠2').setDescription('구일띠 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('구일띠3').setDescription('구일띠 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('인비1').setDescription('인비 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('인비2').setDescription('인비 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('인비3').setDescription('인비 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('페어1').setDescription('페어 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('페어2').setDescription('페어 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('페어3').setDescription('페어 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('옹루케르1').setDescription('옹루케르 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('옹루케르2').setDescription('옹루케르 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('옹루케르3').setDescription('옹루케르 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('오프리숀1').setDescription('오프리숀 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('오프리숀2').setDescription('오프리숀 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('오프리숀3').setDescription('오프리숀 결말').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('약한').setDescription('인비방 약한수학 문제집').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('쪽지오픈').setDescription('페어방 인비쪽지 열림').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('캘린더').setDescription('페어방 캘린더1,2,3').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('카톡').setDescription('페어방 pc카톡 1,2').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('이력서').setDescription('오프리숀 이력서').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('셋팅').setDescription('12345번방 첫사진 게제').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('올청소').setDescription('모든방 청소 500개 한정').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('청소').setDescription('청소갯수').addNumberOption(option => option.setName('숫자').setDescription('최대 99개')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('진엔딩').setDescription('일러스트by 다올.').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('노멀엔딩').setDescription('일러스트by 다올.').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('허사장').setDescription('허경영사장').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('평가표').setDescription('평가표').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('오박사').setDescription('진행자말').addStringOption(option => option.setName('진행말').setDescription('메시지넣기')).setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('비번').setDescription('비밀번호 입력,모든비밀 번호는 여기로 입력').addNumberOption(option => option.setName('비번').setDescription('숫자입력하세요')).setDefaultMemberPermissions(1015125836728377405),
  new SlashCommandBuilder().setName('전화').setDescription('전화를 걸어보자').addStringOption(option => option.setName('다이얼').setDescription('번호적기')),
  new SlashCommandBuilder().setName('시간').setDescription('ex)1시10분=>0110').addNumberOption(option => option.setName('시간').setDescription('시간을 맞춰보자')),
  new SlashCommandBuilder().setName('시계리셋').setDescription('시계리셋').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('전화기초기화').setDescription('전화기습득초기화').setDefaultMemberPermissions(0),
  new SlashCommandBuilder().setName('패턴').setDescription('패턴 잠금 풀기').addStringOption(option => option.setName('패턴').setDescription('번호적기')),
  new SlashCommandBuilder().setName('페어폰').setDescription('패턴용 페어폰 습득').setDefaultMemberPermissions(0),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('코멘드 등록 성공!'))
  .catch(console.error);
