#!/bin/bash

HEROKU_API_KEY='dummy_abcdefgh1234567890'
echo "machine api.heroku.com
  login $HEROKU_EMAIL
  password $HEROKU_API_KEY
machine git.heroku.com
  login $HEROKU_EMAIL
  password $HEROKU_API_KEY" > ~/.netrc
