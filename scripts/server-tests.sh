#!/bin/bash

# test mail server
# https://github.com/jetmore/swaks/blob/v20201014.0/doc/base.pod
swaks --server=mail.bekerle.com --helo bekerle.com --quit-after EHLO
