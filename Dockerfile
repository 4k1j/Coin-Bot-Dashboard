FROM node:16.13.1-alpine

RUN mkdir -p /home/app
WORKDIR /home/app

ENV NODE_ENV=production

COPY . /home/app/

# 노출 포트 지정
EXPOSE 3000

RUN npm install && npm run build
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 컨테이너 생성시 시작명령어
CMD ["npm", "start"]