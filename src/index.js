module.exports = (str, bracketsConfig)=> {
    let s,
        a=()=>{s=str
            bracketsConfig.map((a) => a.join('')).forEach(el=>{str=str.replace(el,'')})
            return str===0?true:s===str?false:a()
        }
    a()
    return  str?false:true
}

