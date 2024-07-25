<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <title>Product Details</title>
</head>
<body>
    <div class="container">
        <h1>Product Details</h1>
        <?php if (!empty($product)): ?>
            <div class="card" style="width: 18rem;">
                <img src="<?php echo $product['image']; ?>" class="card-img-top" alt="<?php echo $product['title']; ?>">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $product['title']; ?></h5>
                    <p class="card-text">Price: $<?php echo $product['price']; ?></p>
                    <p class="card-text"><?php echo $product['description']; ?></p>
                    <p class="card-text">Rating: <?php echo $product['rating']['rate']; ?></p>
                    <p class="card-text">Cantidad Disponibles:<?php echo $product['rating']['count']; ?></p>
                </div>
            </div>
        <?php else: ?>
            <p>Product not found.</p>
        <?php endif; ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
