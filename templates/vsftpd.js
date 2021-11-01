#{{ ansible_managed }}
anonymous_enable={{ anonymous_enable }}
local_enable={{ local_enable }}
write_enable={{ write_enable }}
anon_upload_enable={{ anon_upload_enable }}
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
pam_service_name=vsftpd
userlist_enable=YES
#my IP address={{ ansible_facts['default_ipv4']['address'] }}
