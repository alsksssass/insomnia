const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
  new SlashCommandBuilder().setName('개집벽').setDescription('구일띠 방의 개집벽 그림'),
  new SlashCommandBuilder().setName('노란병').setDescription('구일띠 방의 개집안 밥그릇 확인시'),
  new SlashCommandBuilder().setName('황금열쇠').setDescription('황금열쇠'),
  new SlashCommandBuilder().setName('구일띠일기').setDescription('구일띠 방에서 발견되는 페어 일기'),
  new SlashCommandBuilder().setName('찢어진그림').setDescription('인비방에서 발견되는 찢어진 그림 6장'),
  new SlashCommandBuilder().setName('작품판').setDescription('교실뒤 작품판확인시 나오는 그림4개'),
  new SlashCommandBuilder().setName('쪽지').setDescription('인비방 쪽지(열리지않음)'),
  new SlashCommandBuilder().setName('수영일기').setDescription('수영이 일기(나무아래)'),
  new SlashCommandBuilder().setName('책').setDescription('페어 자기애성 인격장애 책'),
  new SlashCommandBuilder().setName('페어일기').setDescription('페어방에서 발견되는 일기'),
  new SlashCommandBuilder().setName('자물쇠').setDescription('자물쇠그림'),
  new SlashCommandBuilder().setName('편지').setDescription('옹루케르방 최후임편지 연필x'),
  new SlashCommandBuilder().setName('편지2').setDescription('옹루케르방 최후임편지 연필o'),
  new SlashCommandBuilder().setName('수양록').setDescription('수양록 커버'),
  new SlashCommandBuilder().setName('수양록2').setDescription('옹루케루의 수양록'),
  new SlashCommandBuilder().setName('연봉계약서').setDescription('오프리숀 연봉계약서 2장'),
  new SlashCommandBuilder().setName('포스터').setDescription('강아지 수명 포스터'),
  new SlashCommandBuilder().setName('메일함').setDescription('오프리숀 받은 메임함'),
  new SlashCommandBuilder().setName('합격').setDescription('오프리숀 합격메일'),
  new SlashCommandBuilder().setName('오일기').setDescription('오프리숀 일기 5장'),
  new SlashCommandBuilder().setName('박사장').setDescription('박사장 사진'),
  new SlashCommandBuilder().setName('영양제').setDescription('오프리숀 방 강아지 영양제'),
  new SlashCommandBuilder().setName('가나파이').setDescription('번호적힌 가나파이 봉지'),
  new SlashCommandBuilder().setName('휴대폰').setDescription('휴대폰 그림'),
  new SlashCommandBuilder().setName('의자').setDescription('의자 그림'),
  new SlashCommandBuilder().setName('찢어진그림2').setDescription('찢어진 그림 합체판'),
  new SlashCommandBuilder().setName('대걸레').setDescription('대걸레 그림'),
  new SlashCommandBuilder().setName('발달표').setDescription('인비방 선생님투척'),
  new SlashCommandBuilder().setName('결말').setDescription('진엔딩'),
  new SlashCommandBuilder().setName('결말2').setDescription('진실패엔딩'),
  new SlashCommandBuilder().setName('결말3').setDescription('어중간 성공'),
  new SlashCommandBuilder().setName('구일띠').setDescription('구일띠 결말'),
  new SlashCommandBuilder().setName('인비').setDescription('인비 결말'),
  new SlashCommandBuilder().setName('페어').setDescription('페어 결말'),
  new SlashCommandBuilder().setName('옹루케르').setDescription('옹루케르 결말'),
  new SlashCommandBuilder().setName('오프리숀').setDescription('오프리숀 결말'),
  new SlashCommandBuilder().setName('약한').setDescription('인비방 약한수학 문제집'),
  new SlashCommandBuilder().setName('쪽지오픈').setDescription('페어방 인비쪽지 열림'),
  new SlashCommandBuilder().setName('캘린더').setDescription('페어방 캘린더1,2,3'),
  new SlashCommandBuilder().setName('카톡').setDescription('페어방 pc카톡 1,2'),
  new SlashCommandBuilder().setName('이력서').setDescription('오프리숀 이력서'),
  new SlashCommandBuilder().setName('셋팅').setDescription('12345번방 첫사진 게제'),
  new SlashCommandBuilder().setName('올청소').setDescription('모든방 청소 500개 한정'),
  new SlashCommandBuilder().setName('청소').setDescription('현재채널 99개 메시지 삭제'),
  new SlashCommandBuilder().setName('진엔딩').setDescription('일러스트by 다올.'),
  new SlashCommandBuilder().setName('노멀엔딩').setDescription('일러스트by 다올.'),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('코멘드 등록 성공!'))
  .catch(console.error);
