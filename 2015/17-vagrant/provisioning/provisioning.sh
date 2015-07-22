#!/bin/bash

####################################
#   Setup
####################################

tmpfile="/vagrant/provisioning/api-runonce"

if [ -e ${tmpfile} ]; then
  echo "Provisioning already completed. Remove ${tmpfile} to run it again."
  exit 0
fi


####################################
#   Install Software Packages
####################################

# Update base server & apt-get
add-apt-repository -y ppa:rquillo/ansible
apt-get update -y
apt-get -y upgrade

# Install Dev packages
apt-get install -y gcc git-core make libxslt1-dev python-pip manpages curl sl unzip vim acl ansible

# Install Node
# this bash script is from the official docs: http://lnk.ghiassy.com/1A3Yfkj
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs





####################################
#   Configure Environment
####################################

# Create a symlink to use the command 'node' instead of 'nodejs'
ln -s /usr/bin/nodejs /usr/bin/node

npm install -g express


# On SSH login, change to the /vagrant (aka Vagrant synced folder) directory
echo "cd /vagrant" >> /home/vagrant/.bashrc



####################################
#   Closing
####################################

# Set runonce flag
mkdir -p $(dirname ${tmpfile})
touch ${tmpfile}
chown vagrant ${tmpfile}

echo "Provisioning complete. Please run 'vagrant reload api' for new kernel. Have fun."
