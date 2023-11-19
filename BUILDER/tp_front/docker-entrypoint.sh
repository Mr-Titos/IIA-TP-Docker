#!/usr/bin/env sh
set -eu

envsubst '${BACK_HOST} ${BACK_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"