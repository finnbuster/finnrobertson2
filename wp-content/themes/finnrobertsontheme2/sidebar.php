<?php
/**
 * @package WordPress
 * @subpackage HTML5-Reset-WordPress-Theme
 * @since HTML5 Reset 2.0
 */
?>

<?php if ( is_active_sidebar( 'sidebar-primary' ) ) : ?>
    <div id="tertiary" class="sidebar-container" role="complementary">
        <div class="sidebar-inner">
            <div class="widget-area">
                <?php dynamic_sidebar( 'sidebar-primary' ); ?>
            </div><!-- .widget-area -->
        </div><!-- .sidebar-inner -->
    </div><!-- #tertiary -->
<?php endif; ?>