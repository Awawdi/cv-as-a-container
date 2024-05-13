#!/bin/bash

log_file="/var/log/word-mania.log"
echo "START"
word_to_guess="unicorn"
finished=false
while [[ $finished == false ]]; do
        read -p "enter you next guess: " guess
        if [[ $guess == $word_to_guess ]]; then
                echo "BINGO"
                finished=true
        else
                echo "nope, try again"
                hint_char=${word_to_guess:RANDOM%${#word_to_guess}:1}
                echo "One of the letters is: '$hint_char'."
                sleep 5
        fi
done