LISTEN {{ ansible_all_ipv4_addresses }}:443
NameVirtualHost {{ ansible_fqdn }}

<VirtualHost {{ ansible_fqdn }}:443
   DocumentRoot /var/www/html
   SSLEngine on
   SSLcertificateFile /etc/httpd/conf.d/ssl/server.crt
   SSLCertificateKeyFile /etc/httpd/conf.d/ssl/server.key
</VirtualHost>
