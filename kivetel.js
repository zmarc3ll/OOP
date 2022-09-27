try {
    let a = "asdf" /45;
    console.log(a);

    const c = 5;
    c++;

    console.log('try-catch után');

    let uri= ('https://petrik.hu/?param=ő\uD800')
    try {
    let kodolt = encodeURI(uri);
    console.log(kodolt);
    } catch (e) {
    //felhasznaloi input ezert muszaly ellenőrizni
    if (e instanceof URIError) {
        console.error('Érvénytelen URI');
    }
}
} catch (e) {
    console.log('Hiba!');
}
