
   apt-get update \
&& apt-get install -y \
    libaio1 \
    unzip \
&& mkdir /opt/oracle \
&& curl $INSTANTCLIENT_URL --output "instantclient.zip" \
&& unzip instantclient.zip -d /opt/oracle \
&& rm instantclient.zip \
&& find "/opt/oracle" -type "d" -name "instantclient_*" > /etc/ld.so.conf.d/oracle-instantclient.conf \
&& ldconfig