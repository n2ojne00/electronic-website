-- Active: 1698938290511@@127.0.0.1@3306@verkkokauppa
DROP TABLE IF EXISTS order_line;

DROP TABLE IF EXISTS customer_order;

DROP TABLE IF EXISTS customer;

DROP TABLE IF EXISTS product;

DROP TABLE IF EXISTS product_category;

DROP TABLE IF EXISTS palaute;

DROP TABLE IF EXISTS customerfeedback;

CREATE TABLE
    product_category(
        category_name VARCHAR(255) NOT NULL PRIMARY KEY,
        category_description VARCHAR(500)
    );

CREATE TABLE
    product(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        product_description VARCHAR(500),
        product_description1 VARCHAR(500),
        product_description2 VARCHAR(500),
        product_description3 VARCHAR(500),
        price DECIMAL(10, 2),
        price_usd DECIMAL(10, 2),
        image_url VARCHAR(255),
        category VARCHAR(255),
        FOREIGN KEY (category) REFERENCES product_category(category_name)
    );

CREATE TABLE
    palaute (
        id INT PRIMARY KEY AUTO_INCREMENT,
        tuote TEXT,
        feedback TEXT,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE customer (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE, -- Add the email field
    pw VARCHAR(255),
    is_admin BOOLEAN DEFAULT false
);


/* INSERT INTO
    customer (
        first_name,
        last_name,
        username,
        pw,
        is_admin
    )
VALUES (
        'Admin',
        'User',
        'admin_user',
        'admin_password',
        true
    ); */

CREATE TABLE
    customer_order(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        order_date DATETIME NOT NULL,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customer(id)
    );

CREATE TABLE
    order_line(
        order_id INT,
        product_id INT,
        quantity INT,
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES customer_order(id),
        FOREIGN KEY (product_id) REFERENCES product(id)
    );

/*FEEDBACK SQL*/

CREATE TABLE 
    customerfeedback (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) NOT NULL,
        feedback TEXT NOT NULL,
        rating INT NOT NULL
    );

/*FEEDBACK SQL*/

INSERT INTO product_category
VALUES (
        'Naytonohjaimet',
        'AMD ja NVIDIA'
    ), ('Emolevyt', 'AMD ja Intel'), ('Muistit', 'DDR4 ja DDR5'), ('Prosessorit', 'AMD ja Intel'), ('Kotelot', 'Torni ja Mini'), ('Virtalahteet', 'ATX ja mATX');

INSERT INTO
    product (
        product_name,
        product_description,
        product_description1,
        product_description2,
        product_description3,
        price,
        price_usd,
        image_url,
        category
    )
VALUES (
        'Asus GeForce RTX 4070 Näytönohjain',
        'Kellotaajuus: 2520 MHz(Boost Clock)',
        'Muistia: 12 GB GDDR6X',
        'plaaplaa',
        'plaaplaa',
        699.99,
        753.99,
        'https://ic.jimms.fi/product/3/2/438137-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Asus ROG STRIX B550-F Emolevy',
        '3. sukupolven AMD Ryzen -prosessorit',
        'AMD B550 piirisarja',
        '4 x DDR4 DIMM, maks. 128GB',
        'plaaplaa',
        149.99,
        160.99,
        'https://ic.jimms.fi/product/0/6/288203-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Asus PRIME B660-PLUS D4 ATX-emolevy',
        'Prosessorituki: LGA1700 kanta. Tukee 12. sukupolven Intel Core Pentium Gold ja Celeron -prosessoreja',
        'Piirisarja: Intel B660',
        'Muisti: 4 x DDR4 maks 128GB',
        'Audio: Realtek 7.1 Surround Sound High Definition Audio CODEC',
        139.90,
        150.99,
        'https://ic.jimms.fi/product/6/0/369769-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Asus 1000W TUF Gaming Gold Virtalähde',
        'Teho: 1000W',
        'Mitat: 150x 150x 86 mm',
        'Hyötysuhde: 80 Plus Gold',
        'plaaplaa',
        189.99,
        203.99,
        'https://ic.jimms.fi/product/7/5/436674-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Gigabyte B550 AORUS ELITE V2, ATX-emolevy ',
        'Prosessorituki: AM4 –kanta. Tukee 5000 -sarjan prosessoreja / 3. 	sukupolven AMD Ryzen -prosessoreja / Uuden sukupolven AMD Ryzen 	with Radeon Graphics -prosessoreja ',
        'Muistituki: 4 x DDR4 DIMM, maks. 128GB',
        'Audio: Realtek® ALC1200 codec',
        'Piirisarja: AMD B550',
        149.99,
        161.99,
        'https://ic.jimms.fi/product/7/5/336174-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Gigabyte B650 GAMING X AX, ATX-emolevy',
        'Prosessorituki: AMD AM5 -kanta ',
        'Piirisarja: AMD B650',
        'Muisti: 4 x DDR5 DIMM, maks. 128GB ',
        'Audio: Realtek Audio CODEC ',
        189.90,
        204.99,
        'https://ic.jimms.fi/product/1/1/413018-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Asus Geforce RTX 3060 DUAL Näytönohjain',
        'Määrä: 12GB GDDR6',
        'CUDA coret: 3584',
        'Kellotaajuus: 1867 MHz (Boost Clock)',
        'Väylä: PCI-E 4.0 x16',
        329.90,
        355.99,
        'https://ic.jimms.fi/product/0/6/338803-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Intel Core i7-14700K, LGA1700, 3.40 GHz, 33MB, Boxed Prosessori',
        'Ydinten määrä: 20 (8P + 12E)',
        'Threadien määrä: 28',
        'Kellotaajuus: 3.4 GHz (Base, P-core) / 2.5 GHz (Base, E-core)',
        'plaaplaa',
        499.99,
        538.99,
        'https://ic.jimms.fi/product/2/6/464823-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Fractal Design Pop XL Air RGB Black, tornikotelo',
        'Majoittaa E-ATX (maks. 280 mm) / ATX / mATX / Mini ITX -emolevyjä',
        'Sisältää neljä 120 mm Aspect RGB -tuuletinta (ja tukee kahta lisää, kokonaistuki siis kuudelle)',
        'Virtalähteen pituus: 205 mm',
        'Näytönohjaimen pituus: 455 mm kun etutuuletin asennettuna',
        126.99,
        135.99,
        'https://ic.jimms.fi/product/2/2/393827-ig800gg.jpg',
        'Kotelot'
    ), (
        'Kingston 32GB (2 x 16GB) Fury Beast DDR5 6000MHz',
        'Kapasiteetti: 32GB (2 x 16GB)',
        'Nopeus: 6000 MT/s',
        'Latenssi: CL40',
        'plaaplaa',
        144.99,
        155.99,
        'https://ic.jimms.fi/product/8/9/402880-ig800gg.jpg',
        'Muistit'
    ), (
        'MSI GeForce RTX 4070 Näytönohjain',
        'CUDA coret: 5888',
        'Kellotaajuus: Extreme Performance: 2520 MHz (MSI Center)',
        'Muisti: 12GB GDDR6X ',
        'plaaplaa',
        619.99,
        667.99,
        'https://ic.jimms.fi/product/5/8/459951-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Gigabyte Z790 GAMING X AX Emolevy',
        'Prosessorituki: 13. ja 12. sukupolven Intel Core, Pentium Gold ja Celeron -prosessoreja',
        'Muisti: 4 x DDR5, maks. 128GB',
        'Audio: Realtek® Audio CODEC ',
        'plaaplaa',
        269.99,
        290.99,
        'https://ic.jimms.fi/product/9/7/406192-ig800gg.jpg',
        'Emolevyt'
    ), (
        'SilverStone 500W Strider SFX Virtalähde',
        'Teho: 500W',
        'Hyötysuhde: 87%~90%',
        'Mitat: 125 x 63,5 x 130mm',
        'plaaplaa',
        118.99,
        127.99,
        'https://ic.jimms.fi/product/1/3/321416-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Intel Core i5-13600K, LGA1700, 3.50 GHz, 24MB, Boxed Prosessori ',
        'Ydinten määrä: 14 (6P + 8E)',
        'Threadien määrä: 20',
        'Kellotaajuus: 3.50 GHz (Base, P-core)',
        'plaaplaa',
        369.99,
        397.99,
        'https://ic.jimms.fi/product/0/5/405404-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Lian Li LANCOOL II Mesh C Performance, ikkunallinen miditornikotelo',
        'Mitat (SxLxK): 478 x 229 x 494 mm',
        'Yhteensopivuus: E-ATX/ATX (leveys: alle 280mm) / mATX / ITX',
        'Virtalähteen pituus: 210 mm',
        'Näytönohjaimen pituus: 384 mm',
        129.99,
        139.99,
        'https://ic.jimms.fi/product/9/5/374094-ig800gg.jpg',
        'Kotelot'
    ), (
        'Corsair 32GB (2 x 16GB) Vengeance RGB, DDR5 6000MHz',
        'Muistisarja: Vengeance RGB DDR5',
        'Muistityyppi: DDR5 DIMM, 288-pin',
        'Kapasiteetti: 32GB (2 x 16GB)',
        'Latenssi: 30-36-36-76',
        164.99,
        176.99,
        'https://ic.jimms.fi/product/5/8/408651-ig800gg.jpg',
        'Muistit'
    ), (
        'Gigabyte Radeon RX 7800 XT Näytönohjain',
        'Stream-prosessorit: 3840',
        'Kellotaajuus: Boost Clock: 2254 MHz',
        'Muisti: 16GB GDDR6',
        'plaaplaa',
        629.99,
        678.99,
        'https://ic.jimms.fi/product/8/1/457388-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Asus TUF GAMING Z790-PLUS Emolevy',
        'Intel LGA1700 -kanta',
        'Tukee 13. sukupolven Intel Core -prosessoreja ja 12. sukupolven Intel Core, Pentium Gold ja Celeron -prosessoreja',
        'Muisti: 4 x DDR5 DIMM, maks. 128GB',
        'Audio: Realtek S1220A 7.1 Surround Sound High Definition Audio CODEC',
        309.99,
        333.99,
        'https://ic.jimms.fi/product/4/8/418341-ig800gg.jpg',
        'Emolevyt'
    ), (
        'Corsair 850W RM850e Virtalähde',
        'Teho: 850 W',
        'Mitat: 150 x 140 x 86 mm',
        '80 PLUS Gold -sertifioitu',
        'plaaplaa',
        144.99,
        155.99,
        'https://ic.jimms.fi/product/4/1/434348-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'AMD Ryzen 7 7800X3D, AM5, 4.2 GHz, 8-Core Prosessori',
        'Ydinten määrä: 8',
        'Threadien määrä: 16',
        'Kellotaajuus: Base Clock: 4.2 GHz',
        'plaaplaa',
        439.99,
        473.99,
        'https://ic.jimms.fi/product/3/6/428633-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Aerocool CS-107 v2, ikkunallinen minitornikotelo',
        'Kotelotyyppi: Minitorni',
        'Yhteensopivuus: Micro ATX / mini-ITX',
        'Näytönohjaimen pituus: 286mm',
        'Virtalähteen pituus: 159mm',
        39.99,
        42.99,
        'https://ic.jimms.fi/product/5/7/331652-ig800gg.jpg',
        'Kotelot'
    ), (
        'Corsair 32GB (2 x 16GB) Vengeance, DDR5 5200MHz, CL40, 1.25V',
        'Kapasiteetti: 32GB (2 x 16GB)',
        'Nopeus: DDR5-5200',
        'Latenssi: 40-40-40-77',
        'Jännite: 1.25V',
        114.90,
        123.99,
        'https://ic.jimms.fi/product/3/8/366531-ig800gg.jpg',
        'Muistit'
    ), (
        'Corsair 32GB (2 x 16GB) Vengeance RGB Pro, DDR4 3600MHz, CL18, 1.35V',
        'Kapasiteetti: 32GB (2 x 16GB)',
        'Muistityyppi: DDR4 DIMM 288-pin',
        'Nopeus: 3600 MHz (PC4-28800)',
        'Jännite: 1.35 V',
        92.90,
        100.99,
        'https://ic.jimms.fi/product/7/7/274072-ig800gg.jpg',
        'Muistit'
    ), (
        'G.Skill 32GB 2 x 16GB Ripjaws V, DDR4 3200MHz, CL16, 1.35V, musta',
        'Sarja: Ripjaws V',
        'Muistityyppi: DDR4',
        'Nopeus: 3200 MHz',
        'Latenssi: 16-18-18-38',
        85.90,
        100.99,
        'https://ic.jimms.fi/product/8/5/182784-ig800gg.jpg',
        'Muistit'
    ), (
        'Kingston 16GB (2 x 8GB) FURY Beast, DDR4 3200MHz',
        'Kapasiteetti: 16GB (2 x 8GB)',
        'Nopeus: 3200MHz',
        'Latenssi: CL16 (16-18-18) ',
        'plaaplaa',
        49.99,
        52.99,
        'https://ic.jimms.fi/product/5/3/343856-ig800gg.jpg',
        'Muistit'
    ), (
        'Asus GeForce RTX 4070 Ti Näytönohjain',
        'Kellotaajuus: 2730 MHz(Boost Clock)',
        'Muistia: 12 GB GDDR6X',
        'CUDA coret: 7680',
        'Väylä: PCIE 4.0',
        1039.90,
        1119.90,
        'https://ic.jimms.fi/product/1/7/422012-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Asus GeForce RTX 4060 DUAL Näytönohjain',
        'Muisti: 8GB GDDR6',
        'Kellotaajuus: 2535 MHz (Boost Clock)',
        'CUDA coret: 3072',
        'Väylä: PCIE 4.0',
        359.90,
        387.99,
        'https://ic.jimms.fi/product/3/6/447633-ig800gg.jpg',
        'Naytonohjaimet'
    ), (
        'Intel Core i9-14900K, LGA1700, 3.20 GHz, 36MB, Boxed Prosessori',
        'Ydinten määrä: 24 (8P + 16E) ',
        'Threadien määrä: 32',
        'Kellotaajuus: 3.2 GHz (Base, P-core) / 2.4 GHz (Base, E-core) ',
        'Maks turbotaajuus: Intel Thermal Velocity Boost: Enintään 6.0 GHz ',
        679.90,
        732.99,
        'https://ic.jimms.fi/product/5/0/466759-ig800gg.jpg',
        'Prosessorit'
    ), (
        ' Intel Core i5-12600K, LGA1700, 3.70 GHz, 20MB, Boxed Prosessori',
        ' Ydinten määrä: 10 (6P + 4E) ',
        ' Threadien määrä: 16',
        ' Kellotaajuus: 3.70 GHz (Base) ',
        ' Maks turbotaajuus: 4.90 GHz',
        247.90,
        267.99,
        'https://ic.jimms.fi/product/2/3/356326-ig800gg.jpg',
        'Prosessorit'
    ), (
        'Kolink VOID, ikkunallinen ATX-miditornikotelo, valkoinen/musta',
        'Koko: 190 x 430 x 400 mm (L x K x S)',
        'Materiaali:  teräs, karkaistu lasi, muovi',
        'Paino: n. 5.9 kg',
        'Emolevytuki: ATX, Micro-ATX, Mini-ITX',
        61.90,
        66.99,
        'https://ic.jimms.fi/product/2/1/319528-ig800gg.jpg',
        'Kotelot'
    ), (
        'Fractal Design North - Charcoal Black, miditornikotelo, musta',
        'Yhteensopivuus: ATX / mATX / Mini-ITX ',
        'Virtalähdetyyppi: ATX (ei sisälly) ',
        'Kokonaistuuletintuki: 8 x 120 mm tai 6 x 140 mm ',
        'Virtalähteen pituus: 1 HDD Tray: 255 mm, 2 HDD Tray: 155 mm ',
        159.90,
        172.99,
        'https://ic.jimms.fi/product/2/1/418028-ig800gg.jpg ',
        'Kotelot'
    ), (
        'Kolink Citadel Mesh RGB, ikkunallinen mATX-kotelo, valkoinen/musta',
        'Mitat: 400 x 230 x 375 mm',
        'Materiaalit: Teräs, karkaistu lasi, muovi, verkko',
        'Paino: 5,3 kg',
        'Yhteensopivuus: M-ATX / ITX',
        66.90,
        72.99,
        'https://ic.jimms.fi/product/4/4/320245-ig800gg.jpg',
        'Kotelot'
    ), (
        'Seasonic 750W G12 GC-750, ATX-virtalähde, 80 Plus Gold, musta',
        '80 Plus Gold -sertifioitu',
        'Kiinteät kaapelit',
        'S2FC - Älykäs ja hiljainen tuulettimen hallinta',
        'Mitat (PxLxK): 140 x 150 x 86 mm ',
        99.90,
        107.99,
        'https://ic.jimms.fi/product/8/4/329285-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Asus 1000W ROG STRIX Gold Aura Edition, ATX-virtalähde, 80 Plus Gold, musta ',
        'Intel Form Factor: ATX12V ',
        'ATX 3.0: Kyllä ',
        'Mitat: 180 x 150 x 86 mm ',
        'Hyötysuhde: 80 Plus Gold ',
        254.90,
        274.99,
        'https://ic.jimms.fi/product/3/7/436632-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'Asus 1000W ROG Loki Platinum, modulaarinen SFX-L -virtalähde, PCIe 5.0, musta/hopea',
        'ATX 3.0: Kyllä',
        'Mitat: 125 x 125 x 63,5 mm',
        'Hyötysuhde: 80 Plus Platinum',
        'AC-sisääntulon alue: 100-240 Vac',
        264.90,
        285.99,
        ' https://ic.jimms.fi/product/5/5/403754-ig800gg.jpg',
        'Virtalahteet'
    ), (
        'AMD Ryzen 7 7700X, AM5, 4.5 GHz, 8-Core, WOF Prosessori',
        'Ydinten määrä: 8',
        'Muistia: 12 GB GDDR6X',
        'Threadien määrä: 16',
        'Kellotaajuus: Base Clock: 4.5 GHz',
        374.90,
        753.99,
        'https://ic.jimms.fi/product/2/0/416529-ig800gg.jpg',
        'Prosessorit'
    );