#!/bin/bash
cd client && npm run dev &
cd .. & cd server && npm start &
wait