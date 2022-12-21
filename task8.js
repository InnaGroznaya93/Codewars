function createSecretHolder(secret) {
    let _secret = secret
    return {getSecret: () => _secret,
        setSecret: (newSecret) => _secret = newSecret}
}