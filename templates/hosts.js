{% for i in groups['all'] %}
{{ hostvars[i]['ansible_facts']['default_ipv4']['address']}} {{ hostvars[i]['ansible_facts']['fqdn'] }} {{ hostvars[i]['ansible_facts']['hostname'] }}
{% endfor %}
