<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'testsite' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1:3325' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<Q67ewyD1Ejfv^elByI_Tb[33znO40N-@tH#=Y^#d4e#2u@fZVdH[Bei3s1YnfY:' );
define( 'SECURE_AUTH_KEY',  '/`T4tr#u%D#/8K2xxT-YBN~ImwC,kK j8B}iGfVfNsRcAJJVhTN]B`=jy/$e[*9*' );
define( 'LOGGED_IN_KEY',    'Pd 25V%j%&E:b(K/?@H(G(mt(L+?xM7zIQmwSFi!!<(Qp|xSs4A|p72GCP? W=la' );
define( 'NONCE_KEY',        ':&5)w-J6YR6r ~D8L}yEHClN%~76_7C1?GZ,gLM{e N<m-P.`qk!y6@ZuEDhJFDe' );
define( 'AUTH_SALT',        '`=tix#:PKWNT3JMSO9]^03;GFaXr1h?*wWy?+n}qjgTFB}7baOnd0&F(.@Zey^a;' );
define( 'SECURE_AUTH_SALT', '=V{vG8eiw4FBJSZ3$XkQDvY`BJ-SFbUiH>a;=<_D>o=gEKnzhk8QD,8$c`oN]W_x' );
define( 'LOGGED_IN_SALT',   'y)<{M9Nsq<kYHz!6TbK[ZYTm.#qYt/u2z}RU0LXQz##u<y*Ma5kC ow(8a#mV#A[' );
define( 'NONCE_SALT',       'Muh)cbj%r[n+zQG<$e^G-stm(sfiN_l):DNo~$kO^2W[XjC$]l68J)f+NoT{AZG ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
