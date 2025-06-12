const products = [
    //spices
    {       title: 'Black Pepper',
            image: 'https://plus.unsplash.com/premium_photo-1668446314011-301c7a98b6a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 800,
            quantity: 50, 
            location: 'jaipur',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[75.7873,26.9124]
            }
        },
    {       title: 'Cardamom',
            image: 'https://images.unsplash.com/photo-1642255521852-7e7c742ac58f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 1200,
            quantity: 40, location: 'jaipur',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[75.7873,26.9124]
            }
         },
    {       title: 'Turmeric',
            image: 'https://images.unsplash.com/photo-1606951444141-e5533feb55be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 500,
            quantity: 100, 
            location: 'udaipur ',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[73.7125,24.5854]
            }
         },
    {       title: 'Cinnamon',
            image: 'https://images.unsplash.com/photo-1607430866111-3f2b5804f850?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 600,
            quantity: 80,
            location: 'jodhpur',
            category: 'Spices' ,
            geometry:{
                type:'Point',
                coordinates:[73.0243,26.2389]
            }
    },
    {       title: 'Cloves',
            image: 'https://plus.unsplash.com/premium_photo-1722945788534-7dc8af951829?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
             price: 1000,
            quantity: 60,
            location: 'alwar ',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[76.6199, 27.5535]
            }
            },
    {       title: 'Coriander Powder', 
            image: 'https://media.istockphoto.com/id/1158646949/photo/garam-masala-powder.jpg?s=2048x2048&w=is&k=20&c=YfYEnLqpsp9b05yEZXFKB7E-gStDoG72fbAfPcUonHU=',
            price: 350,
            quantity: 120,
            location: 'bhopal ',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[77.4126, 23.2599]
            }
        },
    {        title: 'Ginger Powder',
            image: 'https://images.unsplash.com/photo-1565498971161-42ae3dbcca75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            price: 400, 
            quantity: 150, 
            location: 'prayagraj',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[81.8463, 25.4358]
            } 
        },
    {       title: 'Chili Powder', 
            image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 300,
            quantity: 200,
            location: 'indore',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[75.8573, 22.7196]
            } 
        },
    {       title: 'Mustard Seeds',
            image: 'https://images.unsplash.com/photo-1571903230526-b36b387d4135?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            price: 250,
            quantity: 180,
            location: 'jaiselmer', 
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[70.9030, 26.9157]
            }
         },
    {       title: 'Fenugreek', 
            image: 'https://images.unsplash.com/photo-1640671511581-0cc93ea3ebf2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 350,
            quantity: 90,
            location: 'ahmedabad', 
            category: 'Spices' ,
            geometry:{
                type:'Point',
                coordinates:[72.5714, 23.0225]
            }
        },
    {       title: 'Fennel Seeds',
            image: 'https://images.unsplash.com/photo-1701189975842-591ebd1e26a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 400,
            quantity: 100, 
            location: 'surat',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[72.8311, 21.1702]
            } 
        },
    {       title: 'Saffron', 
            image: 'https://images.unsplash.com/photo-1615885108069-7d5bef9a7e22?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 3000,
            quantity: 30, 
            location: 'jammu', 
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[74.8645, 32.7266]
            }
         },
    {       title: 'Nutmeg', 
            image: 'https://media.istockphoto.com/id/183796794/photo/nutmeg.jpg?s=2048x2048&w=is&k=20&c=JMTtNU0Lfb6TnIGfH1j9ao8GuJsJOlMt7sq3B1dedCg=',
            price: 1200,
            quantity: 50, 
            location: 'goa', 
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[73.8567, 15.2993]
            }
         },
    {       title: 'Mace',
            image: 'https://media.istockphoto.com/id/184137525/photo/mace-spice-indian-cuisine.jpg?s=2048x2048&w=is&k=20&c=VzeHunWu9Ogl9MqcY029fKdbSwKPDyn5TwP8I_44J-A=',
            price: 1500,
            quantity: 20,
            location: 'agra',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[78.0081, 27.1767]
            }
             },
    {       title: 'Tamarind', 
            image: 'https://media.istockphoto.com/id/515438270/photo/tamarind-pods.jpg?s=2048x2048&w=is&k=20&c=Qvbx7P97i4Msbq7QMtJtvwtzikWN9BDMK7kd67K-XTs=',
            price: 200,
            quantity: 250,
            location: 'nagpur',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[79.0882, 21.1458]
            }
         },
    {       title: 'Bay Leaves', 
            image: 'https://media.istockphoto.com/id/1220414182/photo/laurel-leaves.jpg?s=2048x2048&w=is&k=20&c=2HyvTXAXHeafyxqb6JgDXZqPfOdhwaIwYcOfNn2LtB8=',
            price: 100,
            quantity: 200,
            location: 'pune', 
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[73.8567, 18.5204]
            } 
        },
    {       title: 'Garlic Powder', 
            image: 'https://media.istockphoto.com/id/1366928508/photo/garlic-powder.jpg?s=2048x2048&w=is&k=20&c=pK3oyVFW0Y5eANzqlcFp4ooZUPqrVikDTtC8ueff6Bw=', 
            price: 400, 
            quantity: 80,
            location: 'nashik',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[73.7898, 19.9975]
            } 
        },
    {       title: 'Asafoetida',
            image: 'https://media.istockphoto.com/id/861004114/photo/asafoetida-cake-and-powder-or-hing-or-heeng.jpg?s=2048x2048&w=is&k=20&c=YQO1cUousfhEXboveaoezX_FsYYDjAqazpZZ-aaEEgg=',
            price: 600,
            quantity: 60,
            location: 'pushkar',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[74.5555, 26.4909]
            }
             },
    {       title: 'Caraway Seeds',
            image: 'https://images.unsplash.com/photo-1595414902640-590b05382dd6?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 700,
            quantity: 50,
            location: 'bikaner',
            category: 'Spices',
            geometry:{
                type:'Point',
                coordinates:[73.3149, 28.0229]
            } 
            },
    // cash crops
    {       
            title: 'Cotton',
            image: 'https://images.unsplash.com/photo-1616431101491-554c0932ea40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 450,
            quantity: 200, 
            location: 'Guntur',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[80.4428, 16.3067]
            }
         },
    { 
            title: 'Sugarcane',
            image: 'https://plus.unsplash.com/premium_photo-1694864661950-288ec8a06e5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VnYXJjYW5lfGVufDB8fDB8fHww', 
            price: 600,
            quantity: 180, 
            location: 'Kannur',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[75.3704, 11.8745]
            } 
        },
    { 
            title: 'Tobacco',
            image: 'https://images.unsplash.com/photo-1580044305912-70d6e42062cc?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 700,
            quantity: 150,
            location: 'Anantapur',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[77.6006, 14.6819]
            }
         },
    { 
            title: 'Coffee',
            image: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 1200,
            quantity: 60,
            location: 'Coorg',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[75.8069, 12.3375]
            } 
        },
    { 
            title: 'Tea',
            image: 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 800,
            quantity: 120, 
            location: 'Darjeeling',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[88.2627, 27.0360]
            }
         },
    { 
            title: 'Rubber',
            image: 'https://media.istockphoto.com/id/638488470/photo/rubber-tree.jpg?s=2048x2048&w=is&k=20&c=wvcg0kA1RRlioFnTJV-Ur7mhlqmXCmiumYfFDz9uRcs=',
            price: 1000,
            quantity: 100,
            location: 'Kochi',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[76.2673, 9.9312]
            }
         },
    { 
            title: 'Jute', 
            image: 'https://plus.unsplash.com/premium_photo-1674624789813-aee3aaa976cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 300,
            quantity: 200, 
            location: 'Hooghly',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[88.3639, 22.8945]
            }
         },
    { 
            title: 'Cocoa',
            image: 'https://images.unsplash.com/photo-1493925410384-84f842e616fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jb2F8ZW58MHx8MHx8fDA%3D',
            price: 1800,
            quantity: 50,
            location: 'Kochi', 
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[76.2673, 9.9312]
            }
         },
    { 
            title: 'Pepper', 
            image: 'https://media.istockphoto.com/id/2161502998/photo/white-pepper-is-placed-on-a-bowl.jpg?s=2048x2048&w=is&k=20&c=_aOVTd2HG1cwxMADuekgZxzuyvf6LJtcY8Xf1Cf4kl8=',
            price: 1200,
            quantity: 100, 
            location: 'Wayanad', 
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[76.1300, 11.6854]
            }
         },
    { 
        title: 'Coconut',
        image: 'https://images.unsplash.com/photo-1581453883350-288b2c19bea8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        price: 200, 
        quantity: 250, 
        location: 'Cochin', 
        category: 'Cash crops',
        geometry:{
                type:'Point',
                coordinates:[76.2673, 9.9312]
            }
         },

    { 
        title: 'Vanilla',
         image: 'https://media.istockphoto.com/id/1127493864/photo/many-vanilla-beans.jpg?s=2048x2048&w=is&k=20&c=z57ni73H7LlJenrWL7RAlyurstrUrTRTG93fywYEqO4=', 
         price: 5000,
          quantity: 40, 
          location: 'munnar',
           category: 'Cash crops',
           geometry:{
                type:'Point',
                coordinates:[77.0595, 10.0889]
            }
         },

    { 
        title: 'Sesame', 
        image: 'https://media.istockphoto.com/id/1272200600/photo/organic-natural-til-gul-or-sesame-seeds-over-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=6LOQZijQIFZHkBFQwkZZQRDLr755QVs-Tl4zvBg_RkA=',
         price: 900, 
         quantity: 160,
          location: 'Kolar', 
          category: 'Cash crops',
          geometry:{
                type:'Point',
                coordinates:[78.1291, 13.1357]
            }
         },

    { title: 'Safflower',
         image: 'https://images.unsplash.com/photo-1692189231206-44b74c37f6e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmZmxvd2VyfGVufDB8fDB8fHww',
          price: 600,
           quantity: 180,
            location: 'jaipur',
             category: 'Cash crops',
             geometry:{
                type:'Point',
                coordinates:[75.7873,26.9124]
            }
         },

    { 
        title: 'Mustard',
         image: 'https://images.unsplash.com/photo-1557938160-774f7f6b47ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzdGFyZHxlbnwwfHwwfHx8MA%3D%3D',
          price: 350,
          quantity: 220,
           location: 'Ajmer',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[74.6399, 26.4499]
            }
         },

    { 
        title: 'Groundnut', 
        image: 'https://plus.unsplash.com/premium_photo-1668420870736-168a5a5c79a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdW5kbnV0fGVufDB8fDB8fHww',
         price: 350, 
         quantity: 200,
          location: 'Anantapur',
           category: 'Cash crops',
           geometry:{
                type:'Point',
                coordinates:[77.595406, 14.685564]
            }
         },

    { 
        title: 'Soybean', 
        image: 'https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c295YmVhbnxlbnwwfHwwfHx8MA%3D%3D',
         price: 600,
          quantity: 180,
           location: 'Indore',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[ 75.857727, 22.719568]
            }
         },

    { 
        title: 'Sunflower',
         image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZmxvd2VyfGVufDB8fDB8fHww',
          price: 700,
           quantity: 150,
            location: 'Gulbarga', 
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[76.8397, 17.3299]
            }
         },

    { 
        title: 'Chili', 
        image: 'https://images.unsplash.com/photo-1546860255-95536c19724e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGxpfGVufDB8fDB8fHww',
         price: 800, 
         quantity: 200,
          location: 'Nellore', 
          category: 'Cash crops',
          geometry:{
                type:'Point',
                coordinates:[79.9865, 14.4426]
            }
         },

    { 
        title: 'Pineapple', 
        image: 'https://example.com/pineapple.jpg', 
        price: 400,
        quantity: 100,
         location: 'Haveri', 
         category: 'Cash crops',
         geometry:{
                type:'Point',
                coordinates:[75.4000, 14.8000]
            }
         },
    { 
        title: 'Coriander',
         image: 'https://images.unsplash.com/photo-1608797178894-bf7c596932da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29yaWFuZGVyfGVufDB8fDB8fHww',
          price: 500,
           quantity: 250, 
           location: 'Chilakaluripet',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[80.1675, 16.0892]
            }
         },

    { 
        title: 'Green gram', 
        image: 'https://media.istockphoto.com/id/1477149144/photo/mung-beans-lentil-or-mung-daal-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OGmxlM5Qad-zYhwqlM6a19r3ONrhuno5P0tESeBPijY=',
         price: 250,
          quantity: 300,
           location: 'Allahabad',
            category: 'Cash crops',
            geometry:{
                type:'Point',
                coordinates:[81.8463, 25.4358]
            }
         },

    { 
        title: 'Red lentils',
         image: 'https://plus.unsplash.com/premium_photo-1700842181817-e7f4c9fa828a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwbGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D', 
         price: 450,
          quantity: 210,
           location: 'Nagpur', 
           category: 'Cash crops',
           geometry:{
                type:'Point',
                coordinates:[79.0882, 21.1458]
            }
         },

    { 
        title: 'ChickPeas',
         image: 'https://plus.unsplash.com/premium_photo-1675237624857-7d995e29897d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2twZWFzfGVufDB8fDB8fHww',
          price: 350,
           quantity: 230,
            location: 'Kochi',
             category: 'Cash crops',
             geometry:{
                type:'Point',
                coordinates:[76.270523, 9.939093]
            }
         },

    // Livestock and plantation
    { 
        title: 'Cow Milk',
         image: 'https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293JTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D',
          price: 50,
           quantity: 300,
            location: 'Varanasi',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[82.987289, 25.321684]
            }
         },

    { 
        title: 'Buffalo Milk', 
        image: 'https://media.istockphoto.com/id/535489242/photo/pouring-milk-in-the-glass-on-the-background-of-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nfz1s4h4WZfMVIw3wxni69Fq-jxOz1jkrjxCF5GBs1k=',
         price: 60,
          quantity: 250,
           location: 'Patiala',
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[76.379997, 30.340000]
            }
         },

    { 
        title: 'Goat Meat',
         image: 'https://media.istockphoto.com/id/176101808/photo/piece-of-fresh-goat-meat.webp?a=1&b=1&s=612x612&w=0&k=20&c=lrpHYy7rilBn1sK1JxBFkSi1tQFQG1qbBgG3dCo3zxo=',
          price: 450,
           quantity: 100,
            location: 'Lucknow',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[80.949997, 26.850000]
            }
         },

    { 
        title: 'Chicken Eggs',
         image: 'https://images.unsplash.com/photo-1606931104065-82558dca1913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D',
          price: 10,
           quantity: 500, 
           location: 'Bangalore',
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[77.580643, 12.972442]
            }
         },

    { 
        title: 'Duck Eggs', 
        image: 'https://images.unsplash.com/photo-1662879421001-10fc23b843f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1Y2slMjBlZ2d8ZW58MHx8MHx8fDA%3D', 
        price: 15,
         quantity: 400,
          location: 'Kochi',
           category: 'Livestock and Plantation',
           geometry:{
                type:'Point',
                coordinates:[76.267303, 9.931233]
            }
         },

    { 
        title: 'Honey',
         image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXl8ZW58MHx8MHx8fDA%3D',
          price: 200,
           quantity: 100,
            location: 'Mysore',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[76.639381, 12.295810]
            }
         },

    { 
        title: 'Chicken Meat',
         image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8fDA%3D',
          price: 250,
           quantity: 150,
            location: 'Hyderabad',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[78.491684, 17.387140]
            }
         },

    { 
        title: 'Fish',
         image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMG1lYXR8ZW58MHx8MHx8fDA%3D',
          price: 300,
           quantity: 200, 
           location: 'Kochi',
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[76.267303, 9.931233]
            }
         },

    { 
        title: 'Prawns',
         image: 'https://images.unsplash.com/photo-1578069744397-2f3942a02a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhd25zfGVufDB8fDB8fHww',
          price: 600,
           quantity: 100,
            location: 'Visakhapatnam',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[83.218483, 17.686815]
            }
         },

    { 
        title: 'Lamb Meat',
         image: 'https://plus.unsplash.com/premium_photo-1669985398966-5edf74efc29c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
          price: 500,
           quantity: 80,
            location: 'Ajmer',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[74.639915, 26.449896]
            }
         },

    { 
        title: 'Goat Milk',
         image: 'https://plus.unsplash.com/premium_photo-1663036829434-0bd8548c2237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hdCUyMG1pbGt8ZW58MHx8MHx8fDA%3D',
          price: 80, 
          quantity: 120,
           location: 'Pune',
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[73.856255, 18.516726]
            }
         },

    { 
        title: 'Rabbit Meat',
         image: 'https:images.unsplash.com/photo-1529856426070-e610ede5a2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhYmJpdCUyMG1lYXR8ZW58MHx8MHx8fDA%3D',
          price: 400,
           quantity: 60,
            location: 'Jaipur',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[75.7873,26.9124]
            }
         },

    { 
        title: 'Goat Leather',
         image: 'https://images.unsplash.com/photo-1619453989980-5156ac74b63a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hdCUyMGxlYXRoZXJ8ZW58MHx8MHx8fDA%3D',
          price: 1500,
           quantity: 20,
            location: 'Ajmer', 
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[74.639915, 26.449896]
            }
         },

    { 
        title: 'Silk Worms',
         image: 'https://media.istockphoto.com/id/1289603360/photo/silk-worm-eating-leaves-of-mulberry-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=SGVVm6skGp1gin488-kjm8slHCDRWZ9ocfDYROjDykc=',
          price: 500,
           quantity: 100,
            location: 'Jammu',
             category: 'Livestock and Plantation' ,
             geometry:{
                type:'Point',
                coordinates:[74.864273, 32.732998]
            }
        },

    { 
        title: 'Cattle Feed',
         image: 'https://images.unsplash.com/photo-1596047782001-606d3e0cf41d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlJTIwZmVlZHxlbnwwfHwwfHx8MA%3D%3D',
          price: 250,
           quantity: 300,
            location: 'Bikaner',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[73.302155, 28.027138]
            }
         },

    { 
        title: 'Cowhide',
         image: 'https://media.istockphoto.com/id/182195657/photo/authentic-cowhide.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1d8PXp3NN4UNnGbHpJViynaicXvnOeHP7YclWm1mXo=',
          price: 2000,
           quantity: 50,
            location: 'Indore',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[75.857727, 22.719568]
            }
         },

    { 
        title: 'Hatching Eggs',
         image: 'https://media.istockphoto.com/id/1289881423/photo/new-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=2rUzk_ofhcq8vfVVx4-NRamxo_X4u6t4Gkal8Y1LgvQ=',
          price: 20,
           quantity: 400,
            location: 'Rajkot',
             category: 'Livestock and Plantation',
             geometry:{
                type:'Point',
                coordinates:[70.800705, 22.308155]
            }
         },

    { 
        title: 'Alpaca Wool',
         image: 'https://images.unsplash.com/photo-1624548269452-0d6e66296898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwYWNhJTIwd29vbHxlbnwwfHwwfHx8MA%3D%3D',
          price: 4000, 
          quantity: 30,
           location: 'Darjeeling'
           , category: 'Livestock and Plantation',
           geometry:{
                type:'Point',
                coordinates:[88.2663,27.0410]
            }
         },

    { 
        title: 'Sheep Wool', 
        image: 'https://plus.unsplash.com/premium_photo-1661861165508-8f13c77f1a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hlZXAlMjB3b29sfGVufDB8fDB8fHww',
         price: 1000,
          quantity: 80,
           location: 'Barmer',
            category: 'Livestock and Plantation',
            geometry:{
                type:'Point',
                coordinates:[71.3833,   25.7500]
            }
         },

    //cerels and grains
  
        { 
                title: 'Rice',
                 image: 'https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D',
                  price: 50,
                   quantity: 500, 
                   location: 'Kolkata',
                    category: 'Cereals and Grains',
                    geometry:{
                        type:'Point',
                        coordinates:[88.3639, 22.5726]
                    }
                 },

        { 
                title: 'Wheat', 
                image: 'https://media.istockphoto.com/id/1188375216/photo/wheat-ears-grains-and-bowl-of-flour-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=RQLg4tAELmvuplyYU11n3OA9djn-F-RvT7VQJkboEvM=',
                 price: 40,
                  quantity: 600, 
                  location: 'Bhopal',
                   category: 'Cereals and Grains',
                   geometry:{
                        type:'Point',
                        coordinates:[77.4126, 23.2599]
                    }
                 },

        { 
                title: 'Maize',
                 image: 'https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFpemV8ZW58MHx8MHx8fDA%3D',
                  price: 60,
                   quantity: 450,
                    location: 'Indore',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[75.8577, 22.7196]
                    }
                 },

        { 
                title: 'Barley',
                 image: 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFybGV5fGVufDB8fDB8fHww', 
                 price: 55, 
                 quantity: 350,
                  location: 'Nagpur',
                   category: 'Cereals and Grains',
                   geometry:{
                        type:'Point',
                        coordinates:[79.0882, 21.1458]
                    }
                 },

        { 
                title: 'Oats',
                 image: 'https://images.unsplash.com/photo-1598048851887-0263d4f43e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2F0c3xlbnwwfHwwfHx8MA%3D%3D', 
                 price: 100,
                  quantity: 200,
                   location: 'Bangalore',
                    category: 'Cereals and Grains',
                    geometry:{
                        type:'Point',
                        coordinates:[77.5946, 12.9716]
                    }
                 },

        { 
                title: 'Ragi',
                 image: 'https://media.istockphoto.com/id/1317287403/photo/eleusine-coracana-grain-or-finger-millet-also-known-as-ragi-in-india-kodo-in-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=kfpobNHROOJiRT0NUPBIfOnPmCKhIVXVuRbLdJ77IKY=',
                  price: 80,
                   quantity: 300,
                    location: 'Coimbatore',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[76.9558, 11.0168]
                    }
                 },

        { 
                title: 'Sorghum',
                 image: 'https://media.istockphoto.com/id/471729991/photo/a-picture-of-grains-in-a-wooden-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVkAHIE9oJVofvXXT_lOeRlLFlx2ssaI0B-iDmQnhow=',
                  price: 90,
                   quantity: 250, 
                   location: 'Haryana',
                    category: 'Cereals and Grains',
                    geometry:{
                        type:'Point',
                        coordinates:[76.0856, 29.0588]
                    }
                 },

        { 
                title: 'Millets',
                 image: 'https://plus.unsplash.com/premium_photo-1671130295829-23e2b49874a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlsbGV0c3xlbnwwfHwwfHx8MA%3D%3D',
                  price: 70,
                   quantity: 400,
                    location: 'Assam',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[92.9376, 26.2006]
                    } },

        {  
                title: 'Jowar',
                 image: 'https://media.istockphoto.com/id/1156377687/photo/bajra-sorghum-grains-with-its-flour-or-powder-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bbu6_EsSf5a084EpkRsdRzWZqkS2UFcI1Ea6OwtQo2U=',
                  price: 85,
                   quantity: 320,
                    location: 'gwalior ', category: 'Cereals and Grains' ,
                    geometry:{
                        type:'Point',
                        coordinates:[78.1828, 26.2183]
                    }
                },

        { 
                title: 'Chia Seeds',
                 image: 'https://images.unsplash.com/photo-1502825926876-e8819fbb2fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpYSUyMHNlZWR8ZW58MHx8MHx8fDA%3D', 
                 price: 150,
                  quantity: 150,
                   location: 'Pune', 
                   category: 'Cereals and Grains',
                   geometry:{
                        type:'Point',
                        coordinates:[73.8567, 18.5204]
                    }
                 },

        { 
                title: 'Quinoa',
                 image: 'hhttps://plus.unsplash.com/premium_photo-1705207702015-0c1f567a14df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVpbm9hfGVufDB8fDB8fHww',
                  price: 200,
                   quantity: 100,
                    location: 'Delhi',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[77.1025, 28.7041]
                    }
                 },

        { 
                title: 'Corn Flour',
                 image: 'https://media.istockphoto.com/id/175503707/photo/corn-and-flour.webp?a=1&b=1&s=612x612&w=0&k=20&c=G88sk2BeK095mkoikd5YVAQyAYdzdKMGPmmJA0fbqn8=', 
                 price: 50,
                  quantity: 500, 
                  location: 'Chennai',
                   category: 'Cereals and Grains',
                   geometry:{
                        type:'Point',
                        coordinates:[80.2707, 13.0827]
                    }
                 },

        { 
                title: 'Rice Flour',
                 image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGZsb3VyfGVufDB8fDB8fHww',
                  price: 40,
                   quantity: 600,
                    location: 'Hyderabad',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[78.4867, 17.3850]
                    }
                 },

        { 
                title: 'Buckwheat',
                 image: 'https://images.unsplash.com/photo-1613758235306-69cc0a3f614d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVja3doZWF0fGVufDB8fDB8fHww',
                  price: 120,
                   quantity: 300,
                    location: 'Uttarakhand',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[79.0193, 30.0668]
                    }
                 },

        { 
                title: 'Spelt',
                 image: 'https://images.unsplash.com/photo-1520358413332-827169eab913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlbHR8ZW58MHx8MHx8fDA%3D',
                  price: 180,
                   quantity: 150,
                    location: 'Nagaland',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[94.5624, 26.1584]
                    }
                 },

        { 
                title: 'Teff', 
                image: 'https://media.istockphoto.com/id/2173665067/photo/mixed-raw-quinoa-in-wooden-scoop-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=iDd0wMs7bYVgxb2gI_beFnQj_jY0iMZzRkW5FgmYMFQ=', 
                price: 250,
                 quantity: 100,
                  location: 'Nagaland',
                   category: 'Cereals and Grains',
                   geometry:{
                        type:'Point',
                        coordinates:[94.5624, 26.1584]
                    }
                 },

        { 
                title: 'Amaranth',
                 image: 'https://media.istockphoto.com/id/815162944/photo/quinoa-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=XPnifqWFgz0uyWB7Lh2ffoHCTfLfHbGjTcAt6trbpek=',
                  price: 200,
                   quantity: 200,
                    location: 'Kolkata',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[88.3639, 22.5726]
                    }
                 },

        { 
                title: 'Freekeh',
                 image: 'https://media.istockphoto.com/id/2192668012/photo/cooked-pigeon-meat-is-fried-and-served-on-a-white-plate-isolated-in-beige-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=y6rI6eGpNP4KC65PPPaG2VpDdrwh1MkiDBj3-lf-Btg=',
                  price: 220,
                   quantity: 100,
                    location: 'Jaipur',
                     category: 'Cereals and Grains',
                     geometry:{
                        type:'Point',
                        coordinates:[75.7873,26.9124]
                    }
                 },
    
        // legumes and oil seeds
        { title: 'Soybeans',
                 image: 'https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c295YmVhbnN8ZW58MHx8MHx8fDA%3D',
                  price: 120, 
                  quantity: 350,
                   location: 'Indore',
                    category: 'Legumes and Oil Seeds',
                    geometry:{
                type:'Point',
                coordinates:[75.857727, 22.719568]
            } },

    { 
        title: 'Mustard Seeds',
         image: 'https://media.istockphoto.com/id/1200430239/photo/black-mustard-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y6EgCcJEcMT2OOxa8NSYhZsZE1rquwcWv7w_cIld69g=',
          price: 90,
           quantity: 450,
            location: 'Jaipur',
             category: 'Legumes and Oil Seeds',
             geometry:{
        type:'Point',
        coordinates:[75.7873,26.9124]
    } },

    { 
        title: 'Sunflower Seeds',
         image: 'https://images.unsplash.com/photo-1600841784377-45b805f54d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZmxvd2VyJTIwc2VlZHxlbnwwfHwwfHx8MA%3D%3D',
          price: 150,
           quantity: 500,
            location: 'Pune',
             category: 'Legumes and Oil Seeds',
             geometry:{
        type:'Point',
        coordinates:[73.856255, 18.516726]
    } },


    { 
        title: 'Chickpeas',
         image: 'https://images.unsplash.com/photo-1633536705550-c06044327482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY3BlYXN8ZW58MHx8MHx8fDA%3D',
          price: 85,
           quantity: 600,
            location: 'Hyderabad',
             category: 'Legumes and Oil Seeds',
             geometry:{
        type:'Point',
        coordinates:[78.475189, 17.361622]
    } },

    { 
        title: 'Peas',
         image: 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhc3xlbnwwfHwwfHx8MA%3D%3D',
          price: 75,
           quantity: 350,
            location: 'Bhopal',
             category: 'Legumes and Oil Seeds' ,
             geometry:{
        type:'Point',
        coordinates:[77.412613, 23.259933]
    }},

    { 
        title: 'Groundnuts (Peanuts)', 
        image: 'https://plus.unsplash.com/premium_photo-1667773157798-55785dd16b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdW5kbnV0c3xlbnwwfHwwfHx8MA%3D%3D', 
        price: 60,
         quantity: 400,
          location: 'Surat',
           category: 'Legumes and Oil Seeds',
           geometry:{
        type:'Point',
        coordinates:[72.831062, 21.170240]
    } },

    { 
        title: 'Flaxseeds',
         image: 'https://images.unsplash.com/photo-1642497393440-4b5cc5f03ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxheHNlZWRzfGVufDB8fDB8fHww',
          price: 180,
           quantity: 250, 
           location: 'Ahmedabad',
            category: 'Legumes and Oil Seeds',
            geometry:{
        type:'Point',
        coordinates:[72.585022, 23.033863]
    } },

    { 
        title: 'Sesame Seeds',
         image: 'https://plus.unsplash.com/premium_photo-1667773301057-65909aa87b95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VzYW1lJTIwc2VlZHxlbnwwfHwwfHx8MA%3D%3D', 
         price: 200, 
         quantity: 350,
          location: 'Lucknow',
           category: 'Legumes and Oil Seeds',
           geometry:{
        type:'Point',
        coordinates:[80.949997, 26.850000]
    } },

    { title: 'Pine Nuts', image: 'https://media.istockphoto.com/id/171356424/photo/pine-nuts.webp?a=1&b=1&s=612x612&w=0&k=20&c=F-koB1pFUVSbW5wUUmpMKLefk6PeFbUOy9mJEeykq84=', price: 220, quantity: 100, location: 'Dehradun', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[78.032188, 30.316496]
    } },

    { title: 'Poppy Seeds', image: 'https://images.unsplash.com/photo-1612708015264-5f13c037c9cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9wcHklMjBzZWVkfGVufDB8fDB8fHww', price: 250, quantity: 200, location: 'Rajasthan', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[73.432617, 27.391277]
    } },

    { title: 'Hemp Seeds', image: 'https://images.unsplash.com/photo-1605085721494-884d2ba3c268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVtcCUyMHNlZWR8ZW58MHx8MHx8fDA%3D', price: 280, quantity: 150, location: 'Gurgaon', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[77.029000, 28.456000]
    } },

    { title: 'Canola Oil', image: 'https://media.istockphoto.com/id/477198958/photo/bottle-of-rape-oil-on-rustic-wooden-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=surGeT3KfpfZsVqCfv1sl2BTfUubWiJYFlckOCXaWJg=', price: 250, quantity: 150, location: 'Kolkata', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[88.363892, 22.572645]
    } },

    { title: 'Sunflower Oil', image: 'https://images.unsplash.com/photo-1539082929143-fddeb132545e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZmxvd2VyJTIwb2lsfGVufDB8fDB8fHww', price: 220, quantity: 200, location: 'Mumbai', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[72.877426, 19.076090]
    } },

    { title: 'Peanut Oil', image: 'https://media.istockphoto.com/id/1702385538/photo/peanut-oil.jpg?s=612x612&w=0&k=20&c=vw1pOs9s28lxeZZo5Z80C8ai1zPLJRWWmdlDvdhxeK4=', price: 210, quantity: 220, location: 'Chandigarh', category: 'Legumes and Oil Seeds',geometry:{
        type:'Point',
        coordinates:[76.768066, 30.741482]
    } },

    { title: 'Coconut Oil', image: 'https://media.istockphoto.com/id/511052092/photo/coconut-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZCw_GK8rVvdTkmtJFzDUg8fR5qn7rDzOcyLXsQzdLyE=', price: 260, quantity: 250, location: 'Kochi', category: 'Legumes and Oil Seeds' ,geometry:{
        type:'Point',
        coordinates:[76.2673,9.9312]
    }},

    { title: 'Grape Seed Oil', image: 'https://media.istockphoto.com/id/1280359524/photo/organic-grape-seed-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q84xDv1dpseXAR7kez_VPyOV92wfv41RJhfQmWiCMfo=', price: 270, quantity: 200, location: 'Patna', category: 'Legumes and Oil Seeds' ,geometry:{
        type:'Point',
        coordinates:[25.5941,85.1376]
    }},

    //fruits and vegetables
    { title: 'Apples', image: 'https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGVzfGVufDB8fDB8fHww', price: 80, quantity: 500, location: 'Shimla', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[77.1734, 31.1048]
    } },

    { title: 'Bananas', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D', price: 50, quantity: 600, location: 'Lucknow', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[80.9499, 26.8500]
    } },

    { title: 'Mangoes', image: 'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ29lc3xlbnwwfHwwfHx8MA%3D%3D', price: 150, quantity: 350, location: 'Aligarh', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[78.0723, 27.9004]
    } },

    { title: 'Oranges', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D', price: 100, quantity: 400, location: 'Nagpur', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[79.0889, 21.1466]
    } },

    { title: 'Pineapples', image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww', price: 120, quantity: 300, location: 'Kerala', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[76.2711, 10.8505]
    } },

    { title: 'Grapes', image: 'https://plus.unsplash.com/premium_photo-1666270423730-9af384b9cb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGVzfGVufDB8fDB8fHww', price: 200, quantity: 250, location: 'Nashik', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[73.7898, 19.9975]
    } },

    { title: 'Strawberries', image: 'https://images.unsplash.com/photo-1685130050521-821d122f4915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYWJlcnJpZXN8ZW58MHx8MHx8fDA%3D', price: 180, quantity: 200, location: 'Mahabaleshwar', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[73.6556, 17.9217]
    } },

    { title: 'Tomatoes', image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D', price: 40, quantity: 600, location: 'Indore', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[75.8577, 22.7196]
    } },

    { title: 'Cucumbers', image: 'https://images.unsplash.com/photo-1611048661702-7b55eed346b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VjdW1iZXJzfGVufDB8fDB8fHww', price: 30, quantity: 700, location: 'Surat', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[72.8311, 21.1702]
    } },

    { title: 'Carrots', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D', price: 60, quantity: 500, location: 'Jaipur', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[75.7873,26.9124]
    } },

    { title: 'Spinach', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D', price: 40, quantity: 450, location: 'Bangalore', category: 'Fruits and Vegetables' ,geometry:{
        type:'Point',
        coordinates:[77.5946, 12.9716]
    }},

    { title: 'Cauliflower', image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D', price: 70, quantity: 350, location: 'Delhi', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[77.0697, 28.6791]
    } },

    { title: 'Cabbages', image: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXN8ZW58MHx8MHx8fDA%3D', price: 50, quantity: 400, location: 'Kolkata', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[88.3639, 22.5726]
    } },

    { title: 'Bell Peppers', image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVsbCUyMHBlcHBlcnN8ZW58MHx8MHx8fDA%3D', price: 90, quantity: 300, location: 'Chandigarh', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[76.7794, 30.7333]
    } },

    { title: 'Lettuce', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D', price: 60, quantity: 200, location: 'Pune', category: 'Fruits and Vegetables' ,geometry:{
        type:'Point',
        coordinates:[73.8563, 18.5167]
    }},

    { title: 'Zucchini', image: 'https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D', price: 80, quantity: 150, location: 'Hyderabad', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[78.4867, 17.3850]
    } },

    { title: 'Pumpkin', image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D', price: 100, quantity: 180, location: 'Bhopal', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[77.4126, 23.2599]
    } },

    { title: 'Sweet Potatoes', image: 'https://plus.unsplash.com/premium_photo-1675365780148-a00379c54123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXQlMjBwb3RhdG9lc3xlbnwwfHwwfHx8MA%3D%3D', price: 75, quantity: 350, location: 'Coimbatore', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[76.9558, 11.0168]
    } },

    { title: 'Radish', image: 'https://images.unsplash.com/photo-1585369496178-144fd937f249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFkaXNofGVufDB8fDB8fHww', price: 45, quantity: 500, location: 'Gurgaon', category: 'Fruits and Vegetables',geometry:{
        type:'Point',
        coordinates:[77.0266, 28.4595]
    } }
 ];

module.exports = products;