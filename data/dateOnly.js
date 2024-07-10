const FuncdateOnly = () => {
    let dateobj = new Date();
    let dateOnly = dateobj.toISOString().split('T')[0];
    return dateOnly
}

export {FuncdateOnly};