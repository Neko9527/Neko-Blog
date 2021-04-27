---
title: Docker安装RabbitMQ与使用
tags: 
  - Docker
  - RabbitMQ
  - 中间件
date: 2021-03-16
location: chengdu
---

# Docker安装RabbitMQ与使用

## 1. 安装

命令如下

```shell
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 -v `pwd`/data:/var/lib/rabbitmq --hostname myRabbit -e RABBITMQ_DEFAULT_VHOST=my_vhost  -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin rabbitmq
```

说明: 

 --hostname：主机名

RABBITMQ_DEFAULT_USER=admin 默认用户为admin

RABBITMQ_DEFAULT_PASS=admin 密码为admin

RABBITMQ_DEFAULT_VHOST=my_vhost  虚拟机名

5672为rabbitmq的使用端口，15672为管理端口

'pwd'/data:/var/lib/rabbitmq 将当前目录下的data目录和容器的 /var/lib/rabbitmq目录进行映射

## 2. 启动RabbitMQ和管理端插件

```shell
docker start rabbitmq

docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_management
```

然后访问 http://ip:15672

## 3 管理端问题

当点击channels这个tab页时可能会报错，如下

```
Stats in management UI are disabled on this node
```

进入容器修改配置文件

```shell
docker exec -it rabbitmq bash

cd  /etc/rabbitmq/conf.d/

vi  management_agent.disable_metrics_collector.conf

management_agent.disable_metrics_collector = false #默认为true
```

## 4 容器里的一些命令

```shell
rabbitmqctl --help

rabbitmqadmin --help 
#最新版的rabbitmqadmin命令需要安装python3，由于容器里一般都是python2，所以要在容器里使用rabbitmqadmin请安装python3，并创建软连接
```

## 5 Spring boot整合RabbitMQ的一些简单配置

```yaml
spring:
  rabbitmq:
    addresses: 192.168.110.134
    username: admin
    password: admin
    virtual-host: my_host #因为上面默认的虚拟机为my_vhost，也可以在web管理端进行删除 使用 virtual-host: /
    port: 5672
```

