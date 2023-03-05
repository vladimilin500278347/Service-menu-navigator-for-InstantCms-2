<?php if ( $this->isBody() ) { ?>
	<?php $this->addCSS( $this->getTplFilePath( 'widgets/menunavservice/css/foonav.css', false ) ); ?>
	<?php $this->addJS( $this->getTplFilePath( 'widgets/menunavservice/js/foonav.js', false ) ); ?>

	<?php ob_start(); ?>
    <script>
        jQuery(function () {
            FooNav.init(
                {
                    /* доп-класы */
                    classes: "<?php echo (empty( $widget->options[ 'classes' ] )) ? '' : $widget->options[ 'classes' ]; ?>",
                    items: {
                        /* Какой контейнер или айди или клас? */
                        container: "<?php echo $widget->options[ 'container' ]; ?>",
                        /* Какие теги? */
                        selector: "<?php echo $widget->options[ 'selector' ]; ?>",
                        /* Что исключить? */
                        exclude: "<?php echo $widget->options[ 'exclude' ]; ?>"
                    },
                    /* Выбор расположения на экране */
                    position: "<?php echo (empty( $widget->options[ 'position' ] )) ? 'fon-top-right' : $widget->options[ 'position' ]; ?>",
                    /* Тема цветовая */
                    theme: "<?php echo (empty( $widget->options[ 'theme' ] )) ? 'fon-light' : $widget->options[ 'theme' ]; ?>",
                    /* Название вверху навигатора */
					<?php if ( !empty( $widget->options[ 'title' ] ) ) { ?>
                    title: "<?php echo $widget->options[ 'title' ]; ?>",
					<?php } ?>
                    transition: "slide",
                    scroll: 1,
                    smart: {
                        enable: true,
                        anchors: true,
                        close: true,
                        /* раскрывать виджет по желанию клиента */
                        open: <?php if( $widget->options[ 'open' ] ==1 ) { echo 'false'; } else { echo 'true'; } ?>,
                        remember: true,
                        /* плавный скролл или резкий */
                        scroll: <?php if( $widget->options[ 'scroll' ] ==1 ) { echo 'false'; } else { echo 'true'; } ?>
                    }
                }
            )
        });
    </script>

    <script>
        $(document).ready(function () {
            $("#content").on("click", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr("href"), top = $(id).offset().top;
                $("body,html").animate({scrollTop: top - 60}, 1E3)
            });
            $(".fon-menu").on("click", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr("href"), top = $(id).offset().top;
                $("body,html").animate({scrollTop: top - 60}, 1E3)
            })
        });
    </script>
<?php } ?>
<?php $this->addBottom( ob_get_clean() ); ?>
