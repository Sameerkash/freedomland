from brownie import KYC, accounts, config



def main():
    dev = accounts.load('testing_account', '1532')
    KYC.deploy(dev, {'from': dev})