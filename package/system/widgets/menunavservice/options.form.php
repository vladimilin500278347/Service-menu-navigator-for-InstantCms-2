<?php

class formWidgetMenunavserviceOptions extends cmsForm
{

	public function init()
	{

		return [

			[
				'type'   => 'fieldset',
				'title'  => LANG_OPTIONS,
				'childs' => [

					new fieldString( 'options:title', [
							'title'   => LANG_WD_MENUNAVSERVICE_TITLE,
							'hint'    => LANG_WD_MENUNAVSERVICE_TITLE_HINT,
							'default' => ''
						]
					),

					new fieldList( 'options:theme', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_THEME,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_THEME_HINT,
							'default' => 'fon-light',
							'items'   => [
								'fon-blue'              => 'fon-blue',
								'fon-dark'              => 'fon-dark',
								'fon-green'             => 'fon-green',
								'fon-light'             => 'fon-light',
								'fon-flat-ui-amethyst'  => 'fon-flat-ui-amethyst',
								'fon-flat-ui-asbestos'  => 'fon-flat-ui-asbestos',
								'fon-flat-ui-asphalt'   => 'fon-flat-ui-asphalt',
								'fon-flat-ui-blue'      => 'fon-flat-ui-blue',
								'fon-flat-ui-emerald'   => 'fon-flat-ui-emerald',
								'fon-flat-ui-orange'    => 'fon-flat-ui-orange',
								'fon-flat-ui-pumpkin'   => 'fon-flat-ui-pumpkin',
								'fon-flat-ui-red'       => 'fon-flat-ui-red',
								'fon-flat-ui-silver'    => 'fon-flat-ui-silver',
								'fon-flat-ui-turquoise' => 'fon-flat-ui-turquoise'
							]
						]
					),

					new fieldList( 'options:position', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_POSITION,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_POSITION_HINT,
							'default' => 'fon-top-right',
							'items'   => [
								'fon-top-left'     => 'fon-top-left',
								'fon-top-right'    => 'fon-top-right',
								'fon-center-left'  => 'fon-center-left',
								'fon-center-right' => 'fon-center-right',
								'fon-bottom-left'  => 'fon-bottom-left',
								'fon-bottom-right' => 'fon-bottom-right'
							]
						]
					),

					new fieldCheckbox( 'options:open', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_OPEN,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_OPEN_HINT,
							'default' => 1
						]
					),

					new fieldCheckbox( 'options:scroll', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_SCROLL,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_SCROLL_HINT,
							'default' => 1
						]
					)

				]
			],

			[
				'type'   => 'fieldset',
				'title'  => LANG_WD_OPTIONS_ATRR,
				'childs' => [

					new fieldString( 'options:container', [
							'title'   => LANG_WD_MENUNAVSERVICE_DETECT_ACTIVE,
							'hint'    => LANG_WD_MENUNAVSERVICE_DETECT_ACTIVE_HINT,
							'default' => 'article',
							'rules'   => [
								[ 'required' ]
							]
						]
					),

					new fieldString( 'options:classes', [
							'title'   => LANG_WD_MENUNAVSERVICE_CLASSES,
							'hint'    => LANG_WD_MENUNAVSERVICE_CLASSES_HINT,
							'default' => 'fon-rounded fon-shadow'
						]
					),

					new fieldString( 'options:selector', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_SELECTOR,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_SELECTOR_HINT,
							'default' => 'h2,h3,h4,h5,h6',
							'rules'   => [
								[ 'required' ]
							]
						]
					),

					new fieldString( 'options:exclude', [
							'title'   => LANG_WD_MENUNAVSERVICE_ACTIVE_EXCLUDE,
							'hint'    => LANG_WD_MENUNAVSERVICE_ACTIVE_EXCLUDE_HINT,
							'default' => '#comments_widget'
						]
					)

				]
			]

		];

	}

}
