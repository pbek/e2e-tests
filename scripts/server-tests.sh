#!/bin/bash

# test mail server
# https://github.com/jetmore/swaks/blob/v20201014.0/doc/base.pod
swaks --to test@google.com -4 --helo bekerle.com --quit-after RCPT
