from instabot import Bot
import os
# username = your own instagram username
# password = your own instagram password

file_exists = os.path.exists('./config/username_uuid_and_cookie.json');

if file_exists == True:
  os.remove("./config/username_uuid_and_cookie.json")
else:
  print("File coockie shitdoesn't exist")


f = open("urls.txt","r")

bot = Bot()

bot.login(username = "username",
          password = "password")
          
bot.upload_photo("./images/uwu.jpeg",caption= f.read() + ' Wallpaper')


