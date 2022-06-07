cd ~/sulsul-FE

# pm2 ecosystem deploy
if pm2 list | grep -q sulsul-fe
then
  pm2 reload pm2.yml --only sulsul-fe
  echo "pm2 reload"
else
  pm2 start pm2.yml --only sulsul-fe
  echo "pm2 start"
fi